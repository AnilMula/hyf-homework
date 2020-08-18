-- schema creation using MySQL Model
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mealshare
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mealshare
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mealshare` DEFAULT CHARACTER SET utf8 ;
USE `mealshare` ;

-- -----------------------------------------------------
-- Table `mealshare`.`Meal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mealshare`.`Meal` (
  `id` INT UNSIGNED NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` TEXT(100) NULL,
  `location` VARCHAR(45) NOT NULL,
  `when` DATETIME(15) NOT NULL,
  `max_reservations` INT NOT NULL,
  `price` DECIMAL NOT NULL,
  `created_date` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mealshare`.`Reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mealshare`.`Reservation` (
  `id` INT NOT NULL,
  `number_of_guests` INT NOT NULL,
  `created_date` DATE NOT NULL,
  `contact_phonenumber` VARCHAR(45) NOT NULL,
  `contact_name` VARCHAR(45) NOT NULL,
  `meal_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Reservation_Meal_idx` (`meal_id` ASC) VISIBLE,
  CONSTRAINT `fk_Reservation_Meal`
    FOREIGN KEY (`meal_id`)
    REFERENCES `mealshare`.`Meal` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '	';


-- -----------------------------------------------------
-- Table `mealshare`.`Review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mealshare`.`Review` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` TEXT NULL,
  `stars` INT NOT NULL,
  `created_date` DATE NOT NULL,
  `meal_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Review_Meal1_idx` (`meal_id` ASC) VISIBLE,
  CONSTRAINT `fk_Review_Meal1`
    FOREIGN KEY (`meal_id`)
    REFERENCES `mealshare`.`Meal` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
