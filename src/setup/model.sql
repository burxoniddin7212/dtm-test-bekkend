

CREATE database dtm_test;
\c dtm_test

CREATE EXTENSION IF NOT EXISTS pgcrypto;
create type result_user_type as enum('byudjet','kantrakt','tavsiya etilmadi');

CREATE TABLE users(
  user_id serial primary key,
  full_name varchar not null,
  user_name varchar not null,
  password varchar not null,
  tell_number varchar(13) not null,
  gander varchar(6) not null,
  region varchar not null,
  created_at date DEFAULT CURRENT_DATE,
  status varchar DEFAULT('acrive')
);

CREATE TABLE institute(
  institute_id serial primary key,
  name varchar not null,
  created_at date DEFAULT CURRENT_DATE,
  status varchar DEFAULT('acrive')
);

CREATE TABLE science(
  science_id serial primary key,
  name varchar not null,
  created_at date DEFAULT CURRENT_DATE,
  status varchar DEFAULT('acrive')
);

CREATE TABLE faculty(
  faculty_id serial primary key,
  institute_id int REFERENCES institute(institute_id) not null,
  name varchar not null,
  first_block int REFERENCES science(science_id) not null,
  second_block int REFERENCES science(science_id) not null,
  grands varchar(5) not null,
  contracts varchar(5) not null,
  grand_mark varchar(5) not null,
  contract_mark varchar(5) not null,
  created_at date DEFAULT CURRENT_DATE,
  status varchar DEFAULT('acrive')
);

create table tests (
  test_id serial primary key,
  science_id int REFERENCES science(science_id) not null,
  test_question text not null,
  test_variants text[] not null,
  test_answer text not null,
  created_at date DEFAULT CURRENT_DATE,
  status varchar DEFAULT('acrive')
);

CREATE TABLE result(
  result_id serial primary key,
  user_id int REFERENCES users(user_id) not null,
  institute_id int REFERENCES institute(institute_id) not null,
  faculty_id int REFERENCES faculty(faculty_id) not null,
  first_block_ball varchar(5) not null,
  second_block_ball varchar(5) not null,
  result_user result_user_type not null,
  created_at date DEFAULT CURRENT_DATE,
  status varchar DEFAULT('acrive')
);
