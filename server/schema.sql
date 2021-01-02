-- * VISION - we could do two things with our DB
-- *  1) we save user's querys to the database, and when incurring a duplicate query, serve up the DB information instead of relying on the API
-- *  2) we allow the user to save videos to a watch later database, where we can serve up those items later


-- initialize
DROP DATABASE IF EXISTS video_db;
CREATE DATABASE video_db;
USE video_db;

-- create mysql table(s)
CREATE TABLE video_searches (
  searchTerm VARCHAR(100) NOT NULL,
  channelName VARCHAR(50) NOT NULL,
  channelId VARCHAR(50) NOT NULL,
  publishedAt VARCHAR(50) NOT NULL,
  thumbnail VARCHAR(100) NOT NULL,
  videoDesc VARCHAR(200) NOT NULL,
  PRIMARY KEY (searchTerm)
);

-- Add example data