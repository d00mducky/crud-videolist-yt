-- * VISION - we could do two things with our DB
-- *  1) we save user's querys to the database, and when incurring a duplicate query, serve up the DB information instead of relying on the API
-- *  2) we allow the user to save videos to a watch later database, where we can serve up those items later


-- initialize
DROP DATABASE IF EXISTS video_db;
CREATE DATABASE video_db;
USE video_db;

-- holds all search search queries
CREATE TABLE search_history (
  id INT NOT NULL AUTO_INCREMENT,
  searchTerm VARCHAR(100) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

-- holds all videos for a given search query
create table videos (
  id INT NOT NULL AUTO_INCREMENT,
  queryId INT NOT NULL,
  videoData MEDIUMTEXT NOT NULL,
  primary key (id),
  foreign key (queryId) references search_history (id)
);

-- holds all videos selected to watch later
create table watch_later (
  id INT NOT NULL AUTO_INCREMENT,
  queryId INT NOT NULL,
  videoData MEDIUMTEXT NOT NULL,
  PRIMARY KEY (id)
);