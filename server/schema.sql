-- * VISION - we could do two things with our DB
-- *  1) we save user's querys to the database, and when incurring a duplicate query, serve up the DB information instead of relying on the API
-- *  2) we allow the user to save videos to a watch later database, where we can serve up those items later


-- initialize
DROP DATABASE IF EXISTS video_db;
CREATE DATABASE video_db;
USE video_db;

-- create mysql table(s)
CREATE TABLE videos (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(250) NOT NULL,
  description VARCHAR(400) NULL,
  PRIMARY KEY (id)
);

-- Add example data