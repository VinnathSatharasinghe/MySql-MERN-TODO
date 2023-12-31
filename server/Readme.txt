==== async ==== 

When you're working with operations that might take some time to complete, 
such as database queries, file I/O, or network requests,
it's common to use async functions and the
 ---  await --- 
 keyword to manage those asynchronous operations more effectively.

 The async keyword is used to declare an asynchronous function.


 ------------------------------------------------------------------------------------------


 ---- npm i bcryptjs ----

 1. bcryptjs is a JavaScript library used for hashing passwords.
 2. bcryptjs automatically handles the generation and management of a cryptographic salt for each hashed password.

 ------------------------------------------------------------------------------------

 ++ timestamps ++ 

 >>>"timestamps" typically refers to adding timestamp fields (e.g., createdAt and updatedAt) 
 to your data models to track when a record was created and when it was last updated. 

 >>>The timestamps: true option automatically adds createdAt and updatedAt fields to your records.

 ++++++++++++++++
 sub parts ->> createdAt and updatedAt


 1. createdAt:

This field represents the timestamp when a record was created or added to the database.
When a new record is inserted into the database, the createdAt field is automatically set to the current date and time.
It's used to track the moment a particular record was first persisted in the database.


2. updatedAt:

This field represents the timestamp of the last update or modification to a record.
Whenever an existing record is updated (e.g., a field value is changed), the updatedAt field is automatically updated to the current date and time.
It helps track when a record was last modified, providing information about its recent activity.

 ++++++++++++++++

 ------------------------------------------------------------------------------------------------------------------------------------------------------


 --

