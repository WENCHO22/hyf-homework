SET NAMES utf8mb4;
CREATE DATABASE school_db;
USE school_db;

CREATE table `class`(
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`begins` DATE NOT NULL,
`ends` DATE NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `students`(
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(255) NOT NULL,
`email`VARCHAR(255) NOT NULL,
`phone`VARCHAR(255) NOT NULL,
`class_id`INT UNSIGNED NOT NULL,
CONSTRAINT `fk_class` FOREIGN KEY(`class_id`) REFERENCES `class`(`id`) ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX student_index ON `students`(`name`);

ALTER TABLE `class`
ADD COLUMN `status` ENUM("not-started", "ongoing", "finished") NOT NULL;


