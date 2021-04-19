drop database if exists picaday;
create database picaday;

\c picaday;

CREATE TABLE user_entry
(
    id SERIAL,
    image_uri VARCHAR(255),
    image_description VARCHAR(255),
    entry_date DATE,
    locaction VARCHAR(255),
    temperature VARCHAR(255),
    PRIMARY KEY(id)

);
