// Task 2:MongoDB Queries
// This query retrieves all books in the Fantasy genre
db.Books.find({ genre: "Fantasy" })

// This query retrieves all books published after 1950
db.Books.find({ published_year: { $gt: 1950 } })

// This query retrieves all books by George Orwell
db.Books.find({ author: "George Orwell" })

// This query updates the price of "The Lord of the Rings" to 19.50
db.Books.updateOne(
    { title: "The Lord of the Rings" },
    { $set: { price: 19.50 } }
  )

// This query deletes the book "Animal Farm"
  db.books.deleteOne({ title: "Animal Farm" })

// Task 3: Advanced Queries
// This query finds all books that are in stock and published after 2010 (with projection), 
db.books.find(
    {
      in_stock: true,
      published_year: { $gt: 2010 }
    },
    {
      _id: 0,           // Exclude document ID
      title: 1,         // Include title
      author: 1,        // Include author
      price: 1          // Include price
    }
  )

// This query sorts the books by price starting from the cheapest,
db.books.find({}, {title: 1, author: 1, price: 1, _id: 0})
.sort({price: 1})

// This query sorts the books by price starting from the most expensive,
db.books.find({}, {title: 1, author: 1, price: 1, _id: 0})
       .sort({price: -1})

// This query limits the number of books displayed using limit and skip methods
// Page 1
db.books.find({}, {title: 1, author: 1, price: 1, _id: 0})
       .limit(5)
       .skip(0) // Adjust skip value for pagination
//Page 2
db.books.find({}, {title: 1, author: 1, price: 1, _id: 0})
       .limit(5)
       .skip(5) // Adjust skip value for pagination
//Page 3
db.books.find({}, {title: 1, author: 1, price: 1, _id: 0})
       .limit(5)
       .skip(10) // Adjust skip value for pagination
       

// Combined Query
// Paginated results of in-stock books after 2010, sorted high-to-low price (Page 1):
db.books.find(
    { 
      in_stock: true,
      published_year: { $gt: 2010 }
    },
    { 
      _id: 0, 
      title: 1, 
      author: 1, 
      price: 1 
    }
  )
  .sort({price: -1})
  .limit(5)
  .skip(0)

// Task 4: Aggregation Pipeline
// This aggregation pipeline calculates the average price of books by genre

db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  },
  {
    $sort: { averagePrice: 1 } // Sort by average price ascending
  }
])

// This aggregation pipeline finds the author with most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 } // Sort by book count descending
  },
  {
    $limit: 1
  }
])

// This aggregation pipeline groups books by publication decade and counts them
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } }, // Group by decade
      bookCount: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $multiply: ["$_id", 10] }, // Convert to actual decade
      bookCount: 1,
      _id: 0
    }
  },
  {
    $sort: { decade: 1 } // Sort by decade ascending
  }
])

//Task 5: Indexing
// Create an index on the 'title' field to speed up searches by title

db.books.createIndex({ title: 1 })

// Create a compound index on 'author' and 'published_year'
db.books.createIndex({ author: 1, published_year: -1 })

//Use the explain() method to demonstrate the performance improvement with your indexes
// 1. single field index test
//query without index and then with index
db.books.find({ title: "The Hobbit" }).explain("executionStats")

// 2. compound index test
//query without index and then with index
db.books.find({ author: "J.R.R. Tolkien", published_year: { $gt: 1937 } }).explain("executionStats")
