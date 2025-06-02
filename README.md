[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19688173&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

The assignment involved:
1. Setting up a MongoDB database
2. Performing basic CRUD operations
3. Writing advanced queries with filtering, projection, and sorting
4. Creating aggregation pipelines for data analysis
5. Implementing indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation.
2. Clone your personal repository that was created by GitHub Classroom.
3. Install MongoDB locally or set up a MongoDB Atlas account.
4. Run the provided `insert_books.js` script to populate your database.

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions.
- `insert_books.js`: Script to populate your MongoDB database with sample book data.
- `queries.js`: File containing all required MongoDB queries.
- `screenshot.mp4`:screenshot of mongodb compass

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## How to Run the Scripts

### Step 1: Install Dependencies
Run the following command to install the required dependencies:
```bash
npm init -y ( initialize node.js project)
npm install mongodb ( install mongodb)
```
### Step 2: Run the insert_books.js Script
This script populates your MongoDB database with sample book data. Use the following command:
node [insert_books.js]
You should see a message confirming that the books were successfully inserted into the database.

### Step 3: Execute Queries in queries.js
Open a MongoDB shell (e.g., mongosh) or MongoDB Compass.
Use the plp_bookstore database:
use plp_bookstore

### Copy and paste the queries from queries.js into the shell to execute them.
Step 4: Verify Results
Use MongoDB Compass or the shell to verify that the data has been inserted and the queries return the expected results.

### Step 4: Verify Results
Use MongoDB Compass or the shell to verify that the data has been inserted and the queries return the expected results.

## Submission
Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

## Resources
MongoDB Documentation
MongoDB University
MongoDB Node.js Driver