-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2023 at 07:29 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pgdms`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add user', 6, 'add_user'),
(22, 'Can change user', 6, 'change_user'),
(23, 'Can delete user', 6, 'delete_user'),
(24, 'Can view user', 6, 'view_user'),
(25, 'Can add dissertation', 7, 'add_dissertation'),
(26, 'Can change dissertation', 7, 'change_dissertation'),
(27, 'Can delete dissertation', 7, 'delete_dissertation'),
(28, 'Can view dissertation', 7, 'view_dissertation');

-- --------------------------------------------------------

--
-- Table structure for table `dissertations`
--

CREATE TABLE `dissertations` (
  `article_id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `author_name` varchar(100) NOT NULL,
  `journal_name` varchar(100) NOT NULL,
  `institute` varchar(256) NOT NULL,
  `abstract` longtext NOT NULL,
  `medical_system` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `disease_related` varchar(256) NOT NULL,
  `keywords` varchar(256) NOT NULL,
  `full_paper` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dissertations`
--

INSERT INTO `dissertations` (`article_id`, `title`, `author_name`, `journal_name`, `institute`, `abstract`, `medical_system`, `category`, `disease_related`, `keywords`, `full_paper`) VALUES
(1, 'Drug', 'Haaris', 'Times of India', 'MAIT', 'this is a sample', 'AYURVEDA', 'PRECLINICAL_RESEARCH', 'aids', 'drug, aids', 'UserManual.doc');

-- --------------------------------------------------------

--
-- Table structure for table `dissertations_author_id`
--

CREATE TABLE `dissertations_author_id` (
  `id` bigint(20) NOT NULL,
  `dissertation_id` int(11) NOT NULL,
  `user_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dissertations_author_id`
--

INSERT INTO `dissertations_author_id` (`id`, `dissertation_id`, `user_id`) VALUES
(1, 1, '1234'),
(2, 1, '12345');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2023-09-20 05:20:11.734600', '1', 'Dissertation object (1)', 1, '[{\"added\": {}}]', 7, '12345');

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(6, 'authentication', 'user'),
(4, 'contenttypes', 'contenttype'),
(7, 'dissertation', 'dissertation'),
(5, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-09-17 08:51:04.988800'),
(2, 'contenttypes', '0002_remove_content_type_name', '2023-09-17 08:51:05.059076'),
(3, 'auth', '0001_initial', '2023-09-17 08:51:05.362198'),
(4, 'auth', '0002_alter_permission_name_max_length', '2023-09-17 08:51:05.483081'),
(5, 'auth', '0003_alter_user_email_max_length', '2023-09-17 08:51:05.491096'),
(6, 'auth', '0004_alter_user_username_opts', '2023-09-17 08:51:05.498488'),
(7, 'auth', '0005_alter_user_last_login_null', '2023-09-17 08:51:05.508034'),
(8, 'auth', '0006_require_contenttypes_0002', '2023-09-17 08:51:05.513512'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2023-09-17 08:51:05.525033'),
(10, 'auth', '0008_alter_user_username_max_length', '2023-09-17 08:51:05.533430'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2023-09-17 08:51:05.542111'),
(12, 'auth', '0010_alter_group_name_max_length', '2023-09-17 08:51:05.560953'),
(13, 'auth', '0011_update_proxy_permissions', '2023-09-17 08:51:05.571504'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2023-09-17 08:51:05.580678'),
(15, 'authentication', '0001_initial', '2023-09-17 08:51:05.937267'),
(16, 'admin', '0001_initial', '2023-09-17 08:51:06.124145'),
(17, 'admin', '0002_logentry_remove_auto_add', '2023-09-17 08:51:06.135401'),
(18, 'admin', '0003_logentry_add_action_flag_choices', '2023-09-17 08:51:06.144020'),
(19, 'sessions', '0001_initial', '2023-09-17 08:51:06.208327'),
(20, 'dissertation', '0001_initial', '2023-09-17 18:34:24.081890'),
(21, 'dissertation', '0002_alter_dissertation_table', '2023-09-17 18:37:56.214648'),
(22, 'dissertation', '0003_alter_dissertation_options', '2023-09-17 18:38:47.976265'),
(23, 'dissertation', '0004_alter_dissertation_article_id', '2023-09-19 13:24:40.376171'),
(24, 'dissertation', '0005_dissertation_author_id', '2023-09-20 05:09:08.240179'),
(25, 'dissertation', '0006_remove_dissertation_author_id_dissertation_author_id', '2023-09-20 05:13:08.089563');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('2f68kzailxvtsxr1dtvaxkjzv40mv1fl', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qifEW:AMzSWMRVJ8MZJ75soZ2OjkOUDhyvBp_-kdMj3TGoBVA', '2023-10-03 18:14:00.692300'),
('4rcbnugchonsz35f9701xim61ao8l9m0', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qhv3g:8kECv7W6Ub0M_Pvlc3psZrFLgmlQxEMgQBVgSLZBAFo', '2023-10-01 16:55:44.013524'),
('5b4sl9whan2w4jiaf1gr0cedvg32d6ok', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qifFm:J3tGxVdNlXOIGtfB6PhN50XH9OJIGcijsuVziETDo7I', '2023-10-03 18:15:18.438945'),
('7nf0vy95gr1ynumrado4snly2n4uymm2', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qib4U:P16SLIQv-YOGz9Aot5G88BQHP2n2nafsmvqVxCyUL88', '2023-10-03 13:47:22.936542'),
('a84n52ph2parml0lqvequvacpui7dfbp', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qibYR:eYCqhOjsoE37zUZ6bFVIWQxUA90X8SqRccW-tqe31z0', '2023-10-03 14:18:19.274327'),
('asyhqz4pcjzdhdbwb82v9ou6pg8305fd', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qifIH:tKpyRpjx8pOUviHNdoL1D0QmTmkhzk1z5MsO7sP7Mlc', '2023-10-03 18:17:53.169850'),
('f5gutapyzjf32ob71qhtj7p5s8hncx1w', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qigbQ:gTAGzwjp62-AI3RAzRao-OagqHCZ6a6KaR7poxvCwoU', '2023-10-03 19:41:44.051487'),
('gylf86nyoo34x623k9u5e89823nzbauh', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qigJa:Qio0fZyhSWtPQWI-QmsLGVa7NjCITWrVrOts-Gnd0i4', '2023-10-03 19:23:18.472366'),
('hdnt5eoa5b1up36pvkgd1gu4kkkjp40f', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qhv3f:T5BlTwaXftDrfhzCqSBLg4rESv_kz9UvcDkP6hlVeqA', '2023-10-01 16:55:43.694791'),
('hjsf1yiqqstnipmua5q77ts3yss0vsyu', '.eJxVjEEOwiAQRe_C2hAYioBL9z0DmRmoVA0kpV0Z765NutDtf-_9l4i4rSVuPS9xTuIiNJjBitPvTsiPXHeY7lhvTXKr6zKT3BV50C7HlvLzerh_BwV7-dZnsh7MNLC2AwM7CM4EToSeVPAaUdvgAyoEVgbT5B0RqUzG2wwZtXh_AHF8OPA:1qhux5:gTbw3RxhVyfW_8jl8a4NCFQLvotjwlUX8jIuUt00I9c', '2023-10-01 16:48:55.001702'),
('ivoqm1c7ifpecbpxsuu1ld3s29azefwc', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qibzI:DLdWsFyve0A33IIYm8BwxZq02pkeyN4b8hMO_lNJHL8', '2023-10-03 14:46:04.896622'),
('ixz0bms3a3uey992fitdmwfhlv0l81oi', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qif5y:RRc5BYICxOtuQXtxzE20tnUmTcYk7FirWeRgq4I48Qo', '2023-10-03 18:05:10.156290'),
('jwehq236lonfzcunz9ja0g7p9hf44l82', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qigfK:nMyhqqgT2pb54pDlz2gWiQm_WOCelx6-4YXqagtsDkk', '2023-10-03 19:45:46.269926'),
('kdu7ijku62sbp8tmbhlr84cj9czk1v1h', '.eJxVjEEOwiAQRe_C2hAYioBL9z0DmRmoVA0kpV0Z765NutDtf-_9l4i4rSVuPS9xTuIiNJjBitPvTsiPXHeY7lhvTXKr6zKT3BV50C7HlvLzerh_BwV7-dZnsh7MNLC2AwM7CM4EToSeVPAaUdvgAyoEVgbT5B0RqUzG2wwZtXh_AHF8OPA:1qipbD:qEOiagrFYoqM33iI-55lWqT8GnoMzzoXC-edRB_gWsE', '2023-10-04 05:18:07.372768'),
('l0qs5vvrgj357r1a5grx5qm5d5iojq0p', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qhv3e:2_K8idtA4N2DyZFci9G_8R1nAtMl8Noyt3oHR8dwVqo', '2023-10-01 16:55:42.244444'),
('mz6xyj4dtnbq0339zgp79y5kvsk1on9t', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qhv3N:Pzi0C8Vv0idQqhi0PJpACTuATSz9pQvm2UASX6Qpu1c', '2023-10-01 16:55:25.466674'),
('ndoibhfke0iisrxwacc70byzr334g7hf', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qieCx:otAcy18aamrDFVPQhPO4n1KXtJodMgCJeW3KZLxM-hU', '2023-10-03 17:08:19.857434'),
('nkbyll4og6gxm91u6e7qe02itohyz1wg', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qhv3H:f_Cqi_UWmjdLBwmsSm5Pq16ajsxv4A8qcD98H34SIOQ', '2023-10-01 16:55:19.483513'),
('o09row9gv3fby9fkioey72b0sinpav8k', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qievw:TLFzQJOqAncKPIFTKON100rDLggm4fDvwpDPIVVhvCA', '2023-10-03 17:54:48.655201'),
('o72xffj4h3lk8s3t8w207opkwqbwhnvj', '.eJxVjEEOwiAQRe_C2hAYioBL9z0DmRmoVA0kpV0Z765NutDtf-_9l4i4rSVuPS9xTuIiNJjBitPvTsiPXHeY7lhvTXKr6zKT3BV50C7HlvLzerh_BwV7-dZnsh7MNLC2AwM7CM4EToSeVPAaUdvgAyoEVgbT5B0RqUzG2wwZtXh_AHF8OPA:1qiaae:nv4RVdvFB68K4AHmEi_a569oCukJuHKykHes91pzCf0', '2023-10-03 13:16:32.139311'),
('p7b9nk6cz3h8sdgup01iwqkau4e1jvg7', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qhv22:4du36LOSiZB8N14Ba-7HnZ1KcMxPIAAj_wv8TcNxBPk', '2023-10-01 16:54:02.226012'),
('pyzdxwvwa89x2kxehs6un72wda2kfusq', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qifJN:G50vp_BqKh9-qGt8lkQ4RWWcUEelpupp-xflPmVXuLs', '2023-10-03 18:19:01.382404'),
('rfxfffmwonbnymicfuoqbqag1t1yc1n5', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qiazV:Lglf5aGPTuFewVHGTZ9NS-biJiomsqEn0F_kq6CpMQA', '2023-10-03 13:42:13.343866'),
('s1h28k9fd44uxxdfq8v0a9gkhl98gkha', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qhv4y:8ku8wzTSbBEvhiHQ6U-HcjqRzkvcW0J_DZl902aUIZ4', '2023-10-01 16:57:04.614837'),
('t92qxl0xpdphvy1jmitnbia3qqg4nvfv', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qigOj:Ti0iwZHMf7GdD3w6oyu75YmkVqY3Lu-D6BI5uaJLK7E', '2023-10-03 19:28:37.873931'),
('tydm3m5imsckxsi2v6g075ujpmwa4x8u', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qieCB:Mtkn1zWjvNfjvuLKuIqz9Aq6-YS5FmuFOFhsa2268xw', '2023-10-03 17:07:31.994252'),
('ujylqs8jo1lt711yzddinxlgi78eao79', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qigUF:0ugerWh0Ezjj2EuRA_QyhrN0uh2aMlPPjFUwpsAPXkA', '2023-10-03 19:34:19.199474'),
('vcb82wulc821tyy8e348hz3amtnh48f3', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qigPv:cZC9UCegdPo3dCOFolWQlRH1lUrtI0xxcq4LBgMjkaA', '2023-10-03 19:29:51.309800'),
('wx8vdt5eoc2dsi1dkothqj6vq39dxed9', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qicFd:gTg2o4L_RNEcpW9-Ju2HI1mNvXbVOfvD_Kp0A11WFOQ', '2023-10-03 15:02:57.373799'),
('xxwllds5fokp6fx9yqvoto5d1braxp8g', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qigHi:ORoqga2okl0suD_1zz9vio4j8F7JMJwARpReo-QZHso', '2023-10-03 19:21:22.676464'),
('xyzhi7w5f1kxndpfycsp9mah07hig4py', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qif7l:OUKBZ9ggSJ4D5PNK7gDw055n0k2M8b_TvFOkZqs2xrM', '2023-10-03 18:07:01.221573'),
('z7dl2xmqlcuknj7yh4kfb0q46911twz0', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qifIs:YxKVXpFe-LEb00WVkHbOwlvgT7pfCJueh0FH-_RoSzY', '2023-10-03 18:18:30.132520'),
('zpqrkl4tmbfm8ccvf59hauo4xwdcz3mb', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qhv3f:T5BlTwaXftDrfhzCqSBLg4rESv_kz9UvcDkP6hlVeqA', '2023-10-01 16:55:43.408479'),
('zx3q5kf6qby50d6n3jtrrs72zoo7445k', '.eJxVjEEOwiAQRe_C2hAYKIhL9z1DMzCDVA0kpV0Z765NutDtf-_9l5hwW8u0dV6mmcRFaDBWnH7niOnBdWd0x3prMrW6LnOUuyIP2uXYiJ_Xw_07KNjLt_YuoLOgmZyKoFM4gzcImQIpBhPJQQZOAxBmtnZQSYH3VochZqOiFe8PRw44Kw:1qic1L:hOtl-QieeQI2igF78D4RuNkFqHqJcowx_nCe7ZW2dNU', '2023-10-03 14:48:11.976969');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`password`, `last_login`, `is_superuser`, `email`, `is_staff`, `is_active`, `date_joined`, `user_id`, `name`, `role`) VALUES
('pbkdf2_sha256$390000$Zo0M30EwsLZ8e9ViED01FV$EGQ8RL64P/DpYYMMCP9025gzfyROgNaY5IAK6bsLol8=', '2023-09-19 19:45:45.922850', 0, 'chanmeetsinghsahni@gmail.com', 0, 1, '2023-09-17 16:47:14.945604', '1234', 'Chanmeet Singh Sahni', 'STUDENT'),
('pbkdf2_sha256$390000$L5td1fBX9s67ODAr7qWElB$M3d1ZPIRYYgV/0JVo1FzRDDIL7VREZBa0N271Fhsnsk=', '2023-09-20 05:18:07.367254', 1, 'c@gmail.com', 1, 1, '2023-09-17 16:48:30.264755', '12345', 'chanm', 'SUPERUSER');

-- --------------------------------------------------------

--
-- Table structure for table `users_groups`
--

CREATE TABLE `users_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users_user_permissions`
--

CREATE TABLE `users_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `dissertations`
--
ALTER TABLE `dissertations`
  ADD PRIMARY KEY (`article_id`);

--
-- Indexes for table `dissertations_author_id`
--
ALTER TABLE `dissertations_author_id`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dissertations_author_id_dissertation_id_user_id_c543f036_uniq` (`dissertation_id`,`user_id`),
  ADD KEY `dissertations_author_id_user_id_15700a57_fk_users_user_id` (`user_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_users_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `users_groups`
--
ALTER TABLE `users_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_groups_user_id_group_id_fc7788e8_uniq` (`user_id`,`group_id`),
  ADD KEY `users_groups_group_id_2f3517aa_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `users_user_permissions`
--
ALTER TABLE `users_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_permissions_user_id_permission_id_3b86cbdf_uniq` (`user_id`,`permission_id`),
  ADD KEY `users_user_permissio_permission_id_6d08dcd2_fk_auth_perm` (`permission_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `dissertations`
--
ALTER TABLE `dissertations`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dissertations_author_id`
--
ALTER TABLE `dissertations_author_id`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users_groups`
--
ALTER TABLE `users_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users_user_permissions`
--
ALTER TABLE `users_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `dissertations_author_id`
--
ALTER TABLE `dissertations_author_id`
  ADD CONSTRAINT `dissertations_author_dissertation_id_452d28db_fk_dissertat` FOREIGN KEY (`dissertation_id`) REFERENCES `dissertations` (`article_id`),
  ADD CONSTRAINT `dissertations_author_id_user_id_15700a57_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `users_groups`
--
ALTER TABLE `users_groups`
  ADD CONSTRAINT `users_groups_group_id_2f3517aa_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `users_groups_user_id_f500bee5_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `users_user_permissions`
--
ALTER TABLE `users_user_permissions`
  ADD CONSTRAINT `users_user_permissio_permission_id_6d08dcd2_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `users_user_permissions_user_id_92473840_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
