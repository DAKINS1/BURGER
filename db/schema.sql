CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(30) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);


