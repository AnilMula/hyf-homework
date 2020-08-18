-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema farm
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema farm
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `farm` DEFAULT CHARACTER SET utf8 ;
USE `farm` ;

-- -----------------------------------------------------
-- Table `farm`.`farmers`
-- -----------------------------------------------------
<<<<<<< HEAD
CREATE TABLE IF NOT EXISTS `farm`.`farmers` (
  `id` VARCHAR(45) NOT NULL,
  `farmer_id` INT NOT NULL,
  `farmer_name` VARCHAR(45) NOT NULL,
  `farmer_address` VARCHAR(45) NOT NULL,
  `farmer_mobile` INT(10) NOT NULL,
  `animal_id` INT NULL,
=======
CREATE TABLE IF NOT EXISTS `farm`.`farmer` (
  `id` INT(10) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `mobile` INT(10) NOT NULL,
>>>>>>> databases/week2
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
<<<<<<< HEAD
-- Table `farm`.`animals`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`animals` (
  `animal_id` INT NOT NULL,
  `animal_name` VARCHAR(45) NOT NULL,
  `animal_color` VARCHAR(45) NULL,
  `total_children` INT(2) NULL,
  `farmers_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`animal_id`),
  UNIQUE INDEX `animal_id_UNIQUE` (`animal_id` ASC) VISIBLE,
  UNIQUE INDEX `animal_name_UNIQUE` (`animal_name` ASC) VISIBLE,
  INDEX `fk_animals_farmers_idx` (`farmers_id` ASC) VISIBLE,
  CONSTRAINT `fk_animals_farmers`
    FOREIGN KEY (`farmers_id`)
    REFERENCES `farm`.`farmers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
=======
-- Table `farm`.`animal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`animal` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NULL,
  `total_children` INT(2) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `animal_id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `animal_name_UNIQUE` (`name` ASC) VISIBLE)
>>>>>>> databases/week2
ENGINE = InnoDB;


-- -----------------------------------------------------
<<<<<<< HEAD
-- Table `farm`.`barns`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`barns` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `age` INT(2) NOT NULL,
  `parent_id` INT NOT NULL,
  `animals_animal_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_barns_animals1_idx` (`animals_animal_id` ASC) VISIBLE,
  CONSTRAINT `fk_barns_animals1`
    FOREIGN KEY (`animals_animal_id`)
    REFERENCES `farm`.`animals` (`animal_id`)
=======
-- Table `farm`.`barn`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`barn` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `age` INT(2) NOT NULL,
  `parent_name` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `farm`.`farm-animals`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`farm-animals` (
  `id` INT NOT NULL,
  `farmer_id` INT(10) NOT NULL,
  `animal_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_farm-animals_farmer_idx` (`farmer_id` ASC) VISIBLE,
  INDEX `fk_farm-animals_animal1_idx` (`animal_id` ASC) VISIBLE,
  CONSTRAINT `fk_farm-animals_farmer`
    FOREIGN KEY (`farmer_id`)
    REFERENCES `farm`.`farmer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_farm-animals_animal1`
    FOREIGN KEY (`animal_id`)
    REFERENCES `farm`.`animal` (`id`)
>>>>>>> databases/week2
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


<<<<<<< HEAD
=======
-- -----------------------------------------------------
-- Table `farm`.`anilmal-barns`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`anilmal-barns` (
  `id` INT NOT NULL,
  `animal_id` INT NOT NULL,
  `barn_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_anilmal-barns_animal1_idx` (`animal_id` ASC) VISIBLE,
  INDEX `fk_anilmal-barns_barn1_idx` (`barn_id` ASC) VISIBLE,
  CONSTRAINT `fk_anilmal-barns_animal1`
    FOREIGN KEY (`animal_id`)
    REFERENCES `farm`.`animal` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_anilmal-barns_barn1`
    FOREIGN KEY (`barn_id`)
    REFERENCES `farm`.`barn` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

>>>>>>> databases/week2
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
