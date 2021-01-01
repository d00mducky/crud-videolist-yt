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