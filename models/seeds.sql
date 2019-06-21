use kjprfvvfqejcumq9;
-- add data into the photo_category table, database is kjprfvvfqejcumq9 / zoom_In--
INSERT INTO Photocategories (category, createdAt, updatedAt) values ('Nature', NOW(), NOW());
INSERT INTO Photocategories (category, createdAt, updatedAt) values ('Studio', NOW(), NOW());
INSERT INTO Photocategories (category, createdAt, updatedAt) values ('Urban', NOW(), NOW());
INSERT INTO Photocategories (category, createdAt, updatedAt) values ('Sports', NOW(), NOW());
INSERT INTO Photocategories (category, createdAt, updatedAt) values ('Food', NOW(), NOW());
INSERT INTO Photocategories (category, createdAt, updatedAt) values ('Pet', NOW(), NOW());
INSERT INTO Photocategories (category, createdAt, updatedAt) values ('Event', NOW(), NOW());

-- add data into the user table --
INSERT INTO users (name, email, password,zip, createdAt, updatedAt) values ('Chris', 'cslane@gmail.com', 'p@ssw0rd', 21012, NOW(), NOW());
INSERT INTO users (name, email, password,zip, createdAt, updatedAt) values ('Macy', 'macyC@gmail.com', 'p@ssw0rd', 32789,NOW(), NOW());
INSERT INTO users (name, email, password,zip, createdAt, updatedAt) values ('Eric', 'ericy@gmail.com', 'p@ssw0rd', 30343,NOW(), NOW());
INSERT INTO users (name, email, password,zip, createdAt, updatedAt) values ('Dave', 'daved@gmail.com', 'p@ssw0rd', 30327,NOW(), NOW());
INSERT INTO users (name, email, password,zip, createdAt, updatedAt) values ('Angela', 'angela@gmail.com', 'p@ssw0rd', 30305,NOW(), NOW());

-- add data into the event table --
INSERT INTO events (eventName, eventDate, eventTime, eventDescription, createdAt, updatedAt) values ("walk around Atlanta", '2019-6-25', '1:00 PM', 'Take a walk with your camera to shopt the stunning sites of Downtown Atlanta', NOW(), NOW());
INSERT INTO events (eventName, eventDate, eventTime, eventDescription, createdAt, updatedAt) values ("Stone Mountain Fireworks", '2019-7-04', '9:00 PM', 'Capture the beautiful firework display at Stone Mountain.', NOW(), NOW());
INSERT INTO events (eventName, eventDate, eventTime, eventDescription, createdAt, updatedAt) values ("BootCamp Graduation", '2019-8-24', '10:00 AM', 'Bring your camera and watch the BEST graduating class ever from the Georgia Tech online coding bootcamp.', NOW(), NOW());

-- add data into the event_junction table --
--INSERT INTO event_junctions (userId, eventId, createdAt, updatedAt) values (1, 2, NOW(), NOW());
--INSERT INTO event_junctions (userId, eventId, createdAt, updatedAt) values (2, 2, NOW(), NOW());
--INSERT INTO event_junctions (userId, eventId, createdAt, updatedAt) values (4, 1, NOW(), NOW());

-- add data into the category_junction table --
--INSERT INTO category_junctions (userId, catId, createdAt, updatedAt) values (1, 1, NOW(), NOW());
--INSERT INTO category_junctions (userId, catId, createdAt, updatedAt) values (1, 2, NOW(), NOW());
--INSERT INTO category_junctions (userId, catId, createdAt, updatedAt) values (1, 3, NOW(), NOW());
--INSERT INTO category_junctions (userId, catId, createdAt, updatedAt) values (2, 1, NOW(), NOW());
--INSERT INTO category_junctions (userId, catId, createdAt, updatedAt) values (3, 1, NOW(), NOW());