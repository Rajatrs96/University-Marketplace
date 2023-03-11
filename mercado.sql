-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 26, 2022 at 08:54 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mercado`
--

-- --------------------------------------------------------

--
-- Table structure for table `addbp`
--

CREATE TABLE `addbp` (
  `bname` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addbp`
--

INSERT INTO `addbp` (`bname`, `description`) VALUES
('buss 1', 'This is buss 1'),
('buss 2', 'this is 2nd buss');

-- --------------------------------------------------------

--
-- Table structure for table `addclub`
--

CREATE TABLE `addclub` (
  `clubname` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addclub`
--

INSERT INTO `addclub` (`clubname`, `description`) VALUES
('Club 1', 'This is the first club'),
('Club 4', 'Music Club'),
('Club3', 'Arts Club'),
('Club4', 'Coding Club');

-- --------------------------------------------------------

--
-- Table structure for table `addnewproducts`
--

CREATE TABLE `addnewproducts` (
  `title` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `price` int(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `number` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addnewproducts`
--

INSERT INTO `addnewproducts` (`title`, `description`, `price`, `email`, `number`) VALUES
('Earphones', 'To listen music', 10, 'abc@gmail.com', 1234567891),
('Ball', 'Used for playing', 5, 'tom@gmail.com', 1234567891),
('Apple Laptop', 'Laptop', 500, 'xyz@gmail.com', 1234567891),
('Echo Dot', 'Used for listening', 35, 'abcded@gmail.com', 123456780);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `title` varchar(30) NOT NULL,
  `price` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `firstname` varchar(30) NOT NULL,
  `message` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`firstname`, `message`) VALUES
('', 'NULL'),
('Rajat', 'NULL'),
('', 'NULL'),
('Hello', 'NULL'),
('', 'NULL'),
('Hello', 'NULL'),
('', 'NULL'),
('', 'NULL'),
('', 'NULL'),
('', 'NULL'),
('', 'NULL');

-- --------------------------------------------------------

--
-- Table structure for table `leaveclub`
--

CREATE TABLE `leaveclub` (
  `clubname` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `leaveclub`
--

INSERT INTO `leaveclub` (`clubname`, `description`) VALUES
('club1', 'This is the club1');

-- --------------------------------------------------------

--
-- Table structure for table `postadv`
--

CREATE TABLE `postadv` (
  `title` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `postadv`
--

INSERT INTO `postadv` (`title`, `description`) VALUES
('adv 1', 'This is ad1');

-- --------------------------------------------------------

--
-- Table structure for table `registeruser`
--

CREATE TABLE `registeruser` (
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `dob` varchar(100) NOT NULL,
  `phonenumber` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registeruser`
--

INSERT INTO `registeruser` (`firstname`, `lastname`, `dob`, `phonenumber`, `email`, `password`, `role`) VALUES
('abc', 'def', '2022-11-04', '123-678-0987', 'abc@gmail.com', 'abcdefgh', 'student'),
('Albert', 'Einstein', '2022-11-02', '123-987-0984', 'albert@gmail.com', 'alberteinstein', 'superadmin'),
('Chris', 'Gayle', '2022-11-03', '123-678-3456', 'chris@gmail.com', 'chrisgayle', 'superadmin'),
('Peter', 'Griffin', '2022-11-29', '123-987-1234', 'peter@gmail.com', 'petergriffin', 'schooladmin'),
('Rajat', 'Singh', '2022-12-05', '123-456-7891', 'rajat@gmail.com', 'rajatsingh', 'schooladmin'),
('Sam', 'Smith', '2022-11-21', '123-678-3456', 'sam@gmail.om', 'samsmith', 'schooladmin'),
('Steven', 'Speilberg', '2022-11-30', '123-234-1234', 'steven@gmail.com', 'steven', 'businessowner'),
('Robert', 'cook', '2022-11-01', '1234561234', 'tim@gmail.com', 'timcook', 'Admin'),
('tom', 'cruise', '2022-11-16', '123-456-1234', 'tom@gmail.com', 'tomcruise', 'student');

-- --------------------------------------------------------

--
-- Table structure for table `studentchat`
--

CREATE TABLE `studentchat` (
  `sname` varchar(30) NOT NULL,
  `smessage` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addclub`
--
ALTER TABLE `addclub`
  ADD PRIMARY KEY (`clubname`);

--
-- Indexes for table `registeruser`
--
ALTER TABLE `registeruser`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
