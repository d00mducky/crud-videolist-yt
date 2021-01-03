-- * VISION - we could do two things with our DB
-- *  1) we save user's querys to the database, and when incurring a duplicate query, serve up the DB information instead of relying on the API
-- *  2) we allow the user to save videos to a watch later database, where we can serve up those items later


-- initialize
DROP DATABASE IF EXISTS video_db;
CREATE DATABASE video_db;
USE video_db;

-- create mysql table(s)
CREATE TABLE search_history (
  id INT NOT NULL AUTO_INCREMENT,
  searchTerm VARCHAR(100) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

-- CREATE TABLE videos (
--   id INT NOT NULL AUTO_INCREMENT,
create table videos (
  id INT NOT NULL AUTO_INCREMENT,
  queryId INT NOT NULL,
  videoData MEDIUMTEXT NOT NULL,
  primary key (id),
  foreign key (queryId) references search_history (id)
);

create table watch_later (
  id INT NOT NULL AUTO_INCREMENT,
  queryId INT NOT NULL,
  videoData MEDIUMTEXT NOT NULL,
  PRIMARY KEY (id)
);

--   videoId VARCHAR(100) NOT NULL,
--   queryId INT NOT NULL,
--   channelId VARCHAR(50) NOT NULL,
--   channelName VARCHAR(50) NOT NULL,
--   publishedAt VARCHAR(100) NOT NULL,
--   thumbnail VARCHAR(100) NOT NULL,
--   videoDesc VARCHAR(200) NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (queryId) REFERENCES search_history (id)
-- );

-- CREATE TABLE watch_later (
--   id INT NOT NULL AUTO_INCREMENT,
--   videoId VARCHAR(100) NOT NULL,
--   queryId INT NOT NULL,
--   channelId VARCHAR(50) NOT NULL,
--   channelName VARCHAR(50) NOT NULL,
--   publishedAt VARCHAR(100) NOT NULL,
--   thumbnail VARCHAR(100) NOT NULL,
--   videoDesc VARCHAR(200) NOT NULL,
--   PRIMARY KEY (id)
-- );


-- * These are the first five results of a call to youtube's api for the query: 'react dev'

-- insert into search_history (searchTerm) values ("react dev");

-- insert into videos (videoId, queryId, channelId, channelName, publishedAt, thumbnail, videoDesc) values ("dGcsHMXbSOA", 1, "UClb90NQQcskPUGDIXsQEz5Q", "Dev Ed", "2019-04-10T15:45:00Z", "https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg", "Check out my courses and become more creative! https://developedbyed.com/ #javascript #react Today we are going to learn the basics of react. React is a ...");

-- insert into videos (videoId, queryId, channelId, channelName, publishedAt, thumbnail, videoDesc) values ("U9T6YkEDkMo", 1, "UClb90NQQcskPUGDIXsQEz5Q", "Dev Ed", "2019-04-17T15:00:10Z", "https://i.ytimg.com/vi/U9T6YkEDkMo/hqdefault.jpg", "Check out my courses and become more creative! https://developedbyed.com/ #react #javascript In todays episode we are going to take the basics of react and ...");

-- insert into videos (videoId, queryId, channelId, channelName, publishedAt, thumbnail, videoDesc) values ("dMH1_YtUTSQ", 1, "UClb90NQQcskPUGDIXsQEz5Q", "Dev Ed", "2020-08-11T21:00:08Z", "https://i.ytimg.com/vi/dMH1_YtUTSQ/hqdefault.jpg", "Javascript Course SPECIAL DISCOUNT! https://developedbyed.com/p/the-creative-javascript-course/?product_id=1797766&coupon_code=JSTODAY Today ...");

-- insert into videos (videoId, queryId, channelId, channelName, publishedAt, thumbnail, videoDesc) values ("Ip_jOSpThSg", 1, "UCvM5YYWwfLwpcQgbRr68JLQ", "Adrian Twarog", "2020-10-15T09:03:51Z", "https://i.ytimg.com/vi/Ip_jOSpThSg/hqdefault.jpg", "React JS Roadmap for Developers If you're planning on learning reactjs, this react roadmap will cover all the things you might find yourself using along the way.");

-- insert into videos (videoId, queryId, channelId, channelName, publishedAt, thumbnail, videoDesc) values ("pCA4qpQDZD8", 1, "UClb90NQQcskPUGDIXsQEz5Q", "Dev Ed", "2020-08-28T13:00:12Z", "https://i.ytimg.com/vi/pCA4qpQDZD8/hqdefault.jpg", "Check out my courses to become a PRO! https://developedbyed.com/ Get the vanilla js code from here! https://github.com/developedbyed/vanilla-todo Support ...");
