-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 09, 2023 lúc 12:28 PM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `tn408`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bartending`
--

CREATE TABLE `bartending` (
  `b_id` int(11) NOT NULL,
  `b_name` varchar(100) NOT NULL,
  `b_description` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `bartending`
--

INSERT INTO `bartending` (`b_id`, `b_name`, `b_description`) VALUES
(1, 'Cà phê sữa đá', 'Bước 1: Pha nước cốt cà phê đen: Pha phin nhỏ thì dùng 20g cà phê + ít muối ăn + 40ml nước sôi, đợi 2 phút rót thêm 50ml nước sôi. Thu được 40ml nước cốt cà phê.\r\n\r\nBước 2: Pha ly 16oz 450ml, size vừa: Đong 25ml sữa đặc vào ly, tiếp theo cho đá đầy ly.\r\n\r\nBước 3 : Lấy 20ml nước cốt cà phê đã pha ở bước 1 vào ly. Tiếp theo đong 20ml cốt cafe, dùng cây đánh lên bọt từ 15-20 giây, rót lên bề mặt là hoàn thành.\r\nBước 4: hehe'),
(2, 'Cà phê sữa chua', 'Bước 1: Pha cafe\r\nPha cafe bằng phin: Đầu tiên, bạn cần tráng phin qua nước nóng để giảm chênh lệch nhiệt độ của phin và nhiệt độ môi trường, rồi mới cho cafe vào. Thêm 40ml nước nóng ở 85 – 95 độ C, nén chặt và chờ đến khi cafe chảy hết. Lưu ý bạn cần rót nước theo vòng tròn để nước ngấm đều vào cafe trong phin. \r\nBước 2: Pha cafe sữa chua \r\nCách 1: Không cần bình lắc hay máy xay sinh tố \r\n\r\nĐổ sữa đặc vào cốc trước, lớp sữa đặc cao khoảng 3cm rồi mới thêm cafe và nước cốt chanh vào. \r\nSau đó, đổ sữa chua vào khuấy nhẹ để tạo hình nghệ thuật bắt mắt. \r\nCuối cùng, bạn cho thêm đá bào, dùng thìa trộn đều và thưởng thức.\r\nCách 3: Làm cafe sữa chua sử dụng bình lắc \r\n\r\nBạn cho hỗn hợp sữa đặc, sữa chua và nước cốt chanh, đá vào bình lắc rồi lắc đều tay trong khoảng 10 giây để hỗn hợp hòa quyện. \r\nSau đó, đổ ra cốc cho cà phê lên trên và thưởng thức.'),
(3, 'Cà phê sữa dừa', 'Bước 1 Pha hỗn hợp sữa đặc và sữa tươi\r\nBạn rót vào ly 30ml sữa đặc và 10ml sữa tươi, sau đó cho một ít đá lạnh vào, khoảng đến gần đầy ly.\r\n\r\nBước 2 Hoàn thiện ly cà phê sữa dừa\r\nBạn tiếp tục rót 50ml nước cốt cà phê và khoảng 40-45ml nước cốt dừa. Nếu thích ngọt hơn, bạn có thể cho thêm 5ml nước đường.\r\n\r\nVậy là ly cà phê sữa dừa đã hoàn thành.\r\n\r\n3Thành phẩm Ly cà phê sữa dừa có màu sắc bắt mắt và hương vị vô cùng thơm ngon. Đây sẽ là thức uống giúp bạn giải tỏa căng thẳng và tăng khả năng tỉnh táo khi học tập và làm việc.'),
(4, 'Bạc Xỉu', 'Sau khi đã có các nguyên liệu và dụng cụ cần thiết, quy trình pha chế cà phê 3 tầng gồm các bước sau:\r\n\r\nBước 1: Từ nguyên liệu bột cà phê, bạn tiến hành chiết xuất nước cốt cà phê bằng phin pha cà phê. Kết thúc bước 1 bạn sẽ thu được khoảng 40ml nước cốt cà phê rang xay nguyên chất.\r\n\r\nBước 2: Cho nước cốt cà phê nguyên chất vào bình lắc pha chế cùng với một ít đá viên rồi tiến hành lắc tạo bọt trong khoảng thời gian khoảng 30 giây.\r\n\r\nBước 3: Tầng thứ nhất của ly cà phê sẽ được tạo bởi sữa tươi và sữa đặc, dùng thìa để khuấy trộn hỗn hợp này với nhau.\r\n\r\nBước 4: Tầng thứ hai sẽ được tạo bởi cà phê nguyên chất vừa được tạo bọt.\r\n\r\nBước 5: Cho lớp kem sữa tươi lên trên cùng là bạn đã hoàn thành ly cà phê 3 tầng vô cùng bắt mắt và có hương vị thơm ngon.'),
(5, 'Trà Đào Cam Sả', 'Bước 1: Đầu tiên, bạn đun sôi 1.5 lít nước với 2 cây sả đã cắt khúc tầm trong khoảng 10-15 phút.\r\nBước 2: Kế tiếp, bạn sẽ vớt sả ra để riêng, sau đó cho 200 ml nước sả vừa nấu vào ly, rồi bỏ 3 túi lọc hương đào vào ngâm trong khoảng 5-10 phút ( tùy vào khẩu vị thích trà đậm hay trà nhạt mà canh thời gian)\r\nBước 3: Tiếp đến, bạn mang cam cắt đôi, cắt 2-3 lát ngang mỏng bỏ riêng. Phần còn lại vắt lấy nước.\r\nBước 4: Sau đó cho nước cam vào phần trà đã ngâm trước đó, tiếp tục thêm đường (tuỳ theo khẩu vị của bạn), 1 ít nước đào ngâm, 2 lát cam, vài lát đào ngâm và đá viên. '),
(6, 'Trà Đào Kem Cheese', 'Bước 1 Pha trà đào\r\nBạn cho 5g trà xanh vào bình, sau đó cho vào 150ml nước nóng ở nhiệt độ 85 - 90 độ C. Bạn ủ trà trong khoảng 7 phút.\r\nTiếp theo, bạn lọc bỏ phần bã trà và giữ lại nước cốt trà (còn khoảng 130ml).\r\n\r\nBước 2 Làm kem cheese\r\nBạn cho vào ly 50ml sữa tươi không đường, 4 miếng phô mai, 0.5g muối và 10ml nước đường.\r\nTiếp theo, bạn dùng máy trộn bột cầm tay đánh đều hỗn hợp.\r\nBạn tiếp tục cho vào ly 50ml kem Ambiante, sau đó dùng máy đánh đều hỗn hợp một lần nữa để kem cheese được sánh mịn.\r\n\r\nBước 3 Thành phẩm trà đào kem cheeseBạn cho đá viên vào ly, sau đó cho vào 130ml nước cốt trà đã pha.\r\n\r\nBạn tiếp tục cho vào ly 10ml nước đường và dùng muỗng khuấy đều. Sau đó bạn cho vào 20ml siro đào.Cuối cùng, bạn cho phần kem cheese đã làm lên phía trên. Trang trí thêm một ít đào miếng và các topping vị đào. Hoặc bạn có thể thay thế bằng các loại topping khác tùy theo sở thích.'),
(7, 'Trà Cam Đào Dâu Tây', 'Sài Dâu Tây'),
(8, 'Trà Đào Cam Quế', 'Sài Quế'),
(9, 'Lipton nóng', 'Sài nước nóng'),
(10, 'Lipton lạnh', 'Bước 1: Rót 4 ly nước nóng và thả 2 túi trà vào bình trà.\r\n\r\nBước 2: Ngâm túi trà từ 3 đến 5 phút. Lấy túi trà ra và cho thêm đường.\r\n\r\nBước 3: Rót 6 ly đá viên (hoặc có thể thay thế bằng 4 ly nước lạnh) vào bình và khuấy cho đến khi đá tan.\r\n\r\nBước 4: Bạn thêm vài lát chanh tươi để tạo vị chua và hoàn thành một cốc trà lipton ice tea đá đơn giản, hấp dẫn rồi.'),
(11, 'Trà tắc', 'Chỉ dùng tắc'),
(12, 'Trà lai', 'Dùng trà và cà phê'),
(13, 'Milo lạnh', 'Dùng đá'),
(14, 'Milo đá xay', 'Xay nhuyễn đá'),
(15, 'Trà đường', 'Dùng đường'),
(16, 'Trà nóng', 'Dùng nước nóng'),
(17, 'Matcha thường', 'Bình thường'),
(18, 'Matcha đá xay', 'Xay nhuyễn đá'),
(19, 'Trà đào', 'Bước 1 : Ủ phần trà : Lấy 50g trà đen Lộc Phát hoặc Olong Lộc Phát cho vào túi vải lọc trà + 4 lít nước sôi 100 độ >>> Cho vào bình ủ đậy nắp, ủ 20 phút >>> Vớt tủi vải lọc trà và ra, cho 7,5 ml muối ăn >>> Thu được hồng trà.\r\n\r\nBước 2 : Pha chế ly 500ml \r\n\r\nLấy 120ml nước cốt hồng trà Lộc Phát  (300đ).Có thể thay thế hồng trà Lộc Phát thành Olong Lộc Phát (500đ)\r\n\r\n5ml nước đường (200đ)\r\n\r\n10 ml siro đào Tessire (2.500đ) hoặc Golden Farm (800đ)\r\n\r\n1 gói cozy đào hòa tan (1.400đ). Có thể lấy Cozy hòa tan thành Lipton hòa tan (2.200đ)\r\n\r\nKhuấy đều hỗn hợp\r\n\r\nCho 3 hoặc 4 lát đào tươi vào mỗi ly (4-5k). Có thể trang trí thêm 2 lát sả tươi.');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bartending_detail`
--

CREATE TABLE `bartending_detail` (
  `bd_id` int(11) NOT NULL,
  `bd_b_id` int(11) NOT NULL,
  `bd_ing_id` int(11) NOT NULL,
  `bd_amount` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `bartending_detail`
--

INSERT INTO `bartending_detail` (`bd_id`, `bd_b_id`, `bd_ing_id`, `bd_amount`) VALUES
(5, 1, 1, 0.05),
(6, 1, 4, 50),
(12, 19, 2, 0.2),
(13, 19, 7, 10),
(14, 10, 3, 2),
(15, 2, 1, 5),
(16, 2, 8, 1),
(17, 2, 9, 50),
(18, 3, 4, 40),
(19, 3, 1, 50),
(20, 3, 10, 1),
(21, 4, 1, 25),
(22, 4, 4, 150),
(23, 5, 11, 50),
(24, 5, 2, 1),
(25, 5, 12, 1),
(26, 6, 13, 5),
(27, 6, 14, 20),
(28, 6, 15, 4),
(29, 6, 4, 400),
(30, 6, 16, 50);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `costs_incurred`
--

CREATE TABLE `costs_incurred` (
  `ci_id` int(11) NOT NULL,
  `ci_name` varchar(500) NOT NULL,
  `ci_cost` float DEFAULT NULL,
  `ci_u_id` int(11) NOT NULL,
  `ci_stt_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `costs_incurred`
--

INSERT INTO `costs_incurred` (`ci_id`, `ci_name`, `ci_cost`, `ci_u_id`, `ci_stt_id`) VALUES
(1, 'Tiền dọn rác', 50000, 1, 10),
(2, 'Tiền điện', 200000, 1, 11),
(3, 'Phí X', 20000, 1, 11),
(4, 'Tiền giấy in', 25000, 1, 16),
(5, 'Phí vệ sinh', 50000, 1, 16),
(6, 'Phí Y', 25000, 1, 16),
(7, 'Phí A', 100000, 1, 16);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `c_id` int(11) NOT NULL,
  `c_username` varchar(10) NOT NULL,
  `c_password` varchar(10) NOT NULL,
  `c_name` varchar(500) NOT NULL,
  `c_address` varchar(500) DEFAULT NULL,
  `c_phone` varchar(10) DEFAULT NULL,
  `c_ct_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `customers`
--

INSERT INTO `customers` (`c_id`, `c_username`, `c_password`, `c_name`, `c_address`, `c_phone`, `c_ct_id`) VALUES
(1, '', '', 'Hữu Tấn', 'Cần Thơ', '0333333333', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer_type`
--

CREATE TABLE `customer_type` (
  `ct_id` int(11) NOT NULL,
  `ct_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `customer_type`
--

INSERT INTO `customer_type` (`ct_id`, `ct_name`) VALUES
(1, 'Khách hàng VIP'),
(2, 'Khách hàng thân thiết'),
(3, 'Khách vãng lai');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `duties`
--

CREATE TABLE `duties` (
  `d_id` int(11) NOT NULL,
  `d_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `duties`
--

INSERT INTO `duties` (`d_id`, `d_name`) VALUES
(1, 'Admin'),
(2, 'Nhân viên pha chế'),
(3, 'Nhân viên Order');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `import_bill`
--

CREATE TABLE `import_bill` (
  `ib_id` int(11) NOT NULL,
  `ib_name` varchar(500) DEFAULT NULL,
  `ib_date` datetime DEFAULT NULL,
  `ib_cost` float NOT NULL,
  `ib_s_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `import_bill`
--

INSERT INTO `import_bill` (`ib_id`, `ib_name`, `ib_date`, `ib_cost`, `ib_s_id`) VALUES
(29, 'Đơn 21/3 lần 2', '2023-03-21 15:59:59', 100000, 4),
(30, 'Đơn Nhập 26-3', '2023-03-26 12:21:34', 500000, 9),
(31, 'Đơn nhập 27/3', '2023-03-27 12:00:20', 1100000, 10),
(32, 'Đơn nhập 27/3 lần 2', '2023-03-27 12:00:44', 25000, 10),
(33, 'Đơn nhập 4/4', '2023-04-04 13:37:20', 37500000, 16);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `import_bill_detail`
--

CREATE TABLE `import_bill_detail` (
  `ibd_id` int(11) NOT NULL,
  `ibd_ib_id` int(11) NOT NULL,
  `ibd_ing_id` int(11) NOT NULL,
  `ibd_amount` float DEFAULT NULL,
  `ibd_cost` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `import_bill_detail`
--

INSERT INTO `import_bill_detail` (`ibd_id`, `ibd_ib_id`, `ibd_ing_id`, `ibd_amount`, `ibd_cost`) VALUES
(60, 29, 1, 2, 100000),
(61, 30, 1, 10, 500000),
(62, 31, 5, 50, 1100000),
(63, 32, 7, 10, 25000),
(64, 33, 7, 1000, 2500000),
(65, 33, 3, 500, 35000000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ingredient`
--

CREATE TABLE `ingredient` (
  `ing_id` int(11) NOT NULL,
  `ing_name` varchar(200) NOT NULL,
  `ing_amount` float NOT NULL,
  `ing_unit_id` int(11) NOT NULL,
  `ing_ip_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `ingredient`
--

INSERT INTO `ingredient` (`ing_id`, `ing_name`, `ing_amount`, `ing_unit_id`, `ing_ip_id`) VALUES
(1, 'Cà phê hạt', -121.85, 1, 1),
(2, 'Đào tươi', 3.8, 1, 2),
(3, 'Lipton', 498, 5, 2),
(4, 'Sữa', 7860, 2, 4),
(5, 'Bơ', 7, 4, 5),
(6, 'Muối', 1000, 2, 6),
(7, 'siro đào Tessire', 975, 7, 7),
(8, 'Chanh', 50, 4, 9),
(9, 'Sữa chua', 100, 7, 10),
(10, 'Dừa tươi', 49, 4, 11),
(11, 'Sả', 500, 2, 12),
(12, 'Cam', 50, 4, 13),
(13, 'Trà xanh Thái Nguyên', 195, 2, 14),
(14, 'Siro vị Đào', 10, 7, 15),
(15, 'Phô mai', 96, 2, 16),
(16, 'Kem chân châu đường đen Vinamilk', 150, 2, 17);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ingredient_price`
--

CREATE TABLE `ingredient_price` (
  `ip_id` int(11) NOT NULL,
  `ip_ing_name` varchar(500) NOT NULL,
  `ip_price` float NOT NULL,
  `ip_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `ingredient_price`
--

INSERT INTO `ingredient_price` (`ip_id`, `ip_ing_name`, `ip_price`, `ip_date`) VALUES
(1, 'Cà phê hạt', 50000, '2023-03-03'),
(2, 'Đào tươi', 70000, '2023-02-28'),
(3, 'Lipton', 20000, '2023-03-14'),
(4, 'Sữa', 35000, '2023-03-21'),
(5, 'Bơ', 22000, '2023-03-21'),
(6, 'Muối', 15000, '2023-03-21'),
(7, 'siro đào Tessire', 2500, '2023-03-21'),
(8, 'Đường', 12000, '2023-03-21'),
(9, 'Chanh', 15000, '2023-04-04'),
(10, 'Sữa chua', 40000, '2023-04-04'),
(11, 'Dừa tươi', 15000, '2023-04-04'),
(12, 'Sả', 5000, '2023-04-04'),
(13, 'Cam', 55000, '2023-04-04'),
(14, 'Trà xanh Thái Nguyên', 22000, '2023-04-04'),
(15, 'Siro Vị đào', 57000, '2023-04-04'),
(16, 'Phô mai', 150000, '2023-04-04'),
(17, 'Kem Chân châu đường đen Vinamilk', 60000, '2023-04-04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `o_id` int(11) NOT NULL,
  `o_u_id` int(11) NOT NULL,
  `o_c_id` int(11) NOT NULL,
  `o_t_id` int(11) NOT NULL,
  `o_number` int(11) DEFAULT NULL,
  `o_status` tinyint(1) DEFAULT NULL,
  `o_post` tinyint(1) NOT NULL,
  `o_tick` tinyint(1) NOT NULL,
  `o_cost` float DEFAULT NULL,
  `o_time` datetime DEFAULT NULL,
  `o_s_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`o_id`, `o_u_id`, `o_c_id`, `o_t_id`, `o_number`, `o_status`, `o_post`, `o_tick`, `o_cost`, `o_time`, `o_s_id`) VALUES
(279, 1, 1, 2, 1, 1, 0, 0, 145000, '2023-03-21 16:00:56', 4),
(280, 1, 1, 1, 1, 1, 1, 1, 145000, '2023-03-26 12:20:50', 9),
(281, 1, 1, 3, 2, 0, 1, 1, 54000, '2023-03-26 22:22:07', 9),
(283, 1, 1, 2, 1, 1, 1, 1, 100000, '2023-03-27 12:13:32', 10),
(284, 1, 1, 10, 4, 0, 0, 0, 0, '2023-03-27 14:53:04', 10),
(285, 1, 1, 3, 3, 1, 1, 1, 99000, '2023-03-28 10:46:06', 11),
(286, 1, 1, 2, 2, 1, 1, 1, 30000, '2023-03-28 14:20:24', 11),
(287, 1, 1, 1, 1, 1, 1, 1, 145000, '2023-03-31 22:48:40', 12),
(288, 1, 1, 2, 1, 1, 1, 1, 29000, '2023-04-02 22:39:18', 13),
(289, 1, 1, 1, 2, 1, 1, 1, 40000, '2023-04-03 20:36:07', 15),
(290, 1, 1, 2, 2, 1, 1, 1, 54000, '2023-04-03 20:46:07', 15),
(291, 1, 1, 6, 6, 1, 1, 1, 125000, '2023-04-04 08:20:34', 16),
(292, 1, 1, 7, 2, 1, 1, 1, 56000, '2023-04-04 09:04:59', 16),
(293, 1, 1, 4, 1, 1, 1, 1, 20000, '2023-04-04 09:05:39', 16),
(294, 1, 1, 6, 1, 1, 1, 1, 29000, '2023-04-04 09:07:18', 16),
(295, 1, 1, 3, 1, 1, 1, 1, 58000, '2023-04-04 10:00:18', 16),
(296, 1, 1, 2, 1, 1, 1, 1, 86000, '2023-04-04 10:18:08', 16),
(297, 1, 1, 1, 1, 1, 1, 1, 30000, '2023-04-04 13:42:54', 16),
(298, 1, 1, 5, 5, 1, 1, 1, 140000, '2023-04-04 13:44:33', 16),
(299, 1, 1, 4, 1, 1, 1, 1, 30000, '2023-04-04 13:59:53', 16),
(300, 1, 1, 6, 1, 1, 1, 1, 20000, '2023-04-04 14:05:00', 16),
(301, 1, 1, 1, 1, 1, 1, 1, 30000, '2023-04-04 15:03:41', 16),
(302, 1, 1, 1, 1, 1, 1, 1, 28000, '2023-04-04 15:10:14', 16);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_detail`
--

CREATE TABLE `order_detail` (
  `od_id` int(11) NOT NULL,
  `od_o_id` int(11) NOT NULL,
  `od_pro_id` int(11) NOT NULL,
  `od_quantity` float NOT NULL,
  `od_price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `order_detail`
--

INSERT INTO `order_detail` (`od_id`, `od_o_id`, `od_pro_id`, `od_quantity`, `od_price`) VALUES
(239, 279, 1, 5, 29000),
(240, 280, 1, 5, 29000),
(241, 281, 1, 1, 29000),
(242, 281, 2, 1, 25000),
(245, 283, 3, 5, 20000),
(246, 285, 1, 1, 29000),
(247, 285, 2, 2, 25000),
(248, 285, 3, 1, 20000),
(249, 286, 1, 1, 30000),
(250, 287, 1, 5, 29000),
(251, 288, 1, 1, 29000),
(252, 289, 3, 2, 20000),
(253, 290, 1, 1, 29000),
(254, 290, 2, 1, 25000),
(255, 291, 3, 5, 20000),
(256, 291, 2, 1, 25000),
(257, 292, 1, 2, 28000),
(258, 293, 3, 1, 20000),
(259, 294, 1, 1, 29000),
(260, 295, 1, 2, 29000),
(261, 296, 4, 1, 30000),
(262, 297, 6, 1, 30000),
(263, 298, 32, 5, 28000),
(264, 298, 32, 5, 28000),
(266, 296, 5, 1, 28000),
(268, 296, 32, 1, 28000),
(269, 299, 6, 1, 30000),
(270, 300, 5, 1, 20000),
(271, 301, 6, 1, 30000),
(272, 302, 1, 1, 28000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `pro_id` int(11) NOT NULL,
  `pro_name` varchar(200) NOT NULL,
  `pro_price` float NOT NULL,
  `pro_description` varchar(1000) DEFAULT NULL,
  `pro_pt_id` int(11) NOT NULL,
  `pro_pp_id` int(11) NOT NULL,
  `pro_b_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`pro_id`, `pro_name`, `pro_price`, `pro_description`, `pro_pt_id`, `pro_pp_id`, `pro_b_id`) VALUES
(1, 'Cà phê sữa', 28000, 'Hơi béo tí !', 1, 1, 1),
(2, 'Trà đào', 25000, 'Trà đào không chua không lấy tiền !', 1, 3, 19),
(3, 'Liptonn', 20000, 'Hơi chua tý', 1, 2, 10),
(4, 'Cà phê sữa chua', 30000, 'Hơi chua nhiều tí', 1, 4, 2),
(5, 'Cà phê sữa dừa', 20000, 'Hơi đắng xíu, thông cảm !', 1, 5, 3),
(6, 'Bạc Xĩu', 30000, 'Bao ngon luôn ạ !', 1, 6, 4),
(7, 'Trà Đào Cam Sả', 18000, 'Ít đường', 1, 7, 5),
(32, 'Trà Đào Kem Cheese', 28000, 'Thơm ngon bổ dưỡng béo', 1, 8, 6),
(33, 'Trà Cam Đào Dâu Tây', 35000, 'Sài dâu tây', 1, 9, 7),
(34, 'Lipton nóng', 18000, 'Dùng nước nóng', 1, 2, 9),
(35, 'Trà tắc', 20000, 'Dùng tắc và trà', 1, 11, 11),
(36, 'Trà lai', 12000, 'Dùng trà và cà phê', 1, 12, 12),
(37, 'Milo lạnh', 21000, 'Dùng đá', 1, 13, 13),
(38, 'Milo đá xay', 25000, 'Xay nhuyễn đá', 1, 14, 14),
(39, 'Trà đường', 17000, 'Dùng trà Hoa sen', 1, 15, 15),
(40, 'Trà nóng', 19000, 'Không dùng đá', 1, 16, 16),
(41, 'Matcha', 26000, 'Mát mẻ', 1, 17, 17),
(42, 'Matcha đá xay', 29000, 'Xay nhuyễn đá', 1, 18, 18),
(43, '1050ti', 10, 'Card', 0, 0, 0),
(44, '1050ti', 10, 'Card', 0, 0, 0),
(45, '1050ti', 10, 'Card', 0, 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_price`
--

CREATE TABLE `product_price` (
  `pp_id` int(11) NOT NULL,
  `pp_pro_name` varchar(500) NOT NULL,
  `pp_price` float NOT NULL,
  `pp_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product_price`
--

INSERT INTO `product_price` (`pp_id`, `pp_pro_name`, `pp_price`, `pp_date`) VALUES
(1, 'Cà phê sửa', 30000, '2023-02-26'),
(2, 'Lipton', 27000, '2023-03-01'),
(3, 'Trà đào ', 25000, '2023-03-08'),
(4, 'Cà phê sữa chua', 30000, '2023-03-08'),
(5, 'Cà phê sữa dừa', 31000, '2023-03-08'),
(6, 'Bạc Xĩu', 32000, '2023-03-08'),
(7, 'Trà Đào Cam Sả', 23000, '2023-03-08'),
(8, 'Trà đào kem Chese', 34000, '2023-03-08'),
(9, 'Trà Cam Đào Dâu Tây', 35000, '2023-03-08'),
(10, 'Lipton nóng', 18000, '2023-03-08'),
(11, 'Trà Tắc', 20000, '2023-03-08'),
(12, 'Trà lai', 15000, '2023-03-08'),
(13, 'Milo lạnh', 22000, '2023-03-08'),
(14, 'Milo đá xay', 26000, '2023-03-08'),
(15, 'Trà đường', 13000, '2023-03-08'),
(16, 'Trà nóng', 10000, '2023-03-08'),
(17, 'Matcha', 22000, '2023-03-08'),
(18, 'Matcha đá xay', 31000, '2023-03-08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_type`
--

CREATE TABLE `product_type` (
  `pt_id` int(11) NOT NULL,
  `pt_name` varchar(50) NOT NULL,
  `pt_description` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product_type`
--

INSERT INTO `product_type` (`pt_id`, `pt_name`, `pt_description`) VALUES
(1, 'Nước uống', 'Giải khát'),
(2, 'Đồ ăn', 'Thơm ngon');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shifts`
--

CREATE TABLE `shifts` (
  `s_id` int(11) NOT NULL,
  `s_name` varchar(500) NOT NULL,
  `s_begin_time` time DEFAULT NULL,
  `s_end_time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `shifts`
--

INSERT INTO `shifts` (`s_id`, `s_name`, `s_begin_time`, `s_end_time`) VALUES
(1, 'Sáng', '08:00:00', '12:00:00'),
(2, 'Chiều', '12:00:00', '17:00:00'),
(3, 'Tối', '17:00:00', '22:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `statistical`
--

CREATE TABLE `statistical` (
  `s_id` int(11) NOT NULL,
  `s_name` varchar(50) NOT NULL,
  `s_import` float NOT NULL,
  `s_export` float NOT NULL,
  `s_profit` float NOT NULL,
  `s_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `statistical`
--

INSERT INTO `statistical` (`s_id`, `s_name`, `s_import`, `s_export`, `s_profit`, `s_date`) VALUES
(4, 'Thống kê 20/3', 160000, 145000, -15000, '2023-03-20 15:57:00'),
(9, 'Thống Kê 26/3', 620000, 199000, -421000, '2023-03-26 12:18:34'),
(10, 'Thống kê 27/3', 1235000, 100000, -1135000, '2023-03-27 11:58:48'),
(11, 'Thống kê 28/3', 280000, 129000, -151000, '2023-03-28 10:44:49'),
(12, 'Thống kê 31-3', 60000, 145000, 85000, '2023-03-31 22:46:45'),
(13, 'Thống kê 2/4', 180000, 29000, -151000, '2023-04-02 22:36:36'),
(15, 'Thống Kê 3/4', 60000, 94000, 34000, '2023-04-03 20:35:17'),
(16, 'Thống kê 4/4', 37940000, 1295000, -36645000, '2023-04-04 08:19:48');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tables`
--

CREATE TABLE `tables` (
  `t_id` int(11) NOT NULL,
  `t_position` varchar(500) DEFAULT NULL,
  `t_empty` tinyint(1) DEFAULT NULL,
  `t_pay` tinyint(1) DEFAULT NULL,
  `t_num` int(11) NOT NULL,
  `t_seats` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tables`
--

INSERT INTO `tables` (`t_id`, `t_position`, `t_empty`, `t_pay`, `t_num`, `t_seats`) VALUES
(1, 'kế nhà vệ sinh', 0, 1, 1, 4),
(2, 'kế cột điện', 0, 1, 1, 4),
(3, 'kế bàn thu ngân', 0, 1, 1, 4),
(4, 'kế cửa ra vào', 0, 1, 1, 5),
(5, 'trung tâm quán', 0, 1, 5, 2),
(6, 'Hong biết luôn', 0, 1, 1, 5),
(7, 'Kế bàn số 5', 0, 1, 2, 6),
(8, 'Kế lỗi cổng vào', 1, 0, 0, 5),
(9, 'Kế bà bàn số 8', 1, 0, 0, 4),
(10, 'Kế máy lạnh', 1, 0, 0, 4),
(11, 'Kế bàn số 10', 1, 0, 0, 4),
(12, 'Trung tâm quán', 1, 0, 0, 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `timekeeping`
--

CREATE TABLE `timekeeping` (
  `tk_id` int(11) NOT NULL,
  `tk_u_id` int(11) NOT NULL,
  `tk_s_id` int(11) NOT NULL,
  `tk_date` datetime NOT NULL,
  `tk_note` varchar(1024) DEFAULT NULL,
  `t_s_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `timekeeping`
--

INSERT INTO `timekeeping` (`tk_id`, `tk_u_id`, `tk_s_id`, `tk_date`, `tk_note`, `t_s_id`) VALUES
(27, 1, 2, '2023-03-21 15:59:26', '', 4),
(28, 1, 2, '2023-03-26 12:20:07', '', 9),
(29, 1, 2, '2023-03-27 12:01:10', '', 9),
(30, 1, 3, '2023-03-27 18:51:33', NULL, 10),
(31, 1, 1, '2023-03-28 10:45:58', '', 11),
(34, 1, 3, '2023-03-31 22:49:18', '', 12),
(36, 1, 3, '2023-04-02 22:37:15', '', 13),
(37, 3, 3, '2023-04-02 22:38:00', '', 13),
(38, 1, 3, '2023-04-03 20:35:24', '', 13),
(39, 1, 3, '2023-04-03 20:35:51', '', 15),
(40, 1, 1, '2023-04-04 08:20:06', '', 16),
(41, 1, 2, '2023-04-04 13:26:08', '', 16),
(42, 3, 2, '2023-04-04 13:55:06', '', 16),
(43, 2, 2, '2023-04-04 13:53:40', '', 16);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `unit`
--

CREATE TABLE `unit` (
  `unit_id` int(11) NOT NULL,
  `unit_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `unit`
--

INSERT INTO `unit` (`unit_id`, `unit_name`) VALUES
(1, 'kg'),
(2, 'gram'),
(3, 'thìa'),
(4, 'quả'),
(5, 'gói'),
(6, 'lít'),
(7, 'ml'),
(8, 'Hủ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `u_id` int(11) NOT NULL,
  `u_username` varchar(10) NOT NULL,
  `u_password` varchar(10) NOT NULL,
  `u_name` varchar(100) NOT NULL,
  `u_address` varchar(500) DEFAULT NULL,
  `u_phone` varchar(10) DEFAULT NULL,
  `u_d_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`u_id`, `u_username`, `u_password`, `u_name`, `u_address`, `u_phone`, `u_d_id`) VALUES
(1, 'admin', '12345', 'Hữu Tấn', 'Cần Thơ', '0328069555', 1),
(2, 'bartender', '1234', 'Kim Thoa', 'Cần Thơ', '0921146300', 2),
(3, 'waiter', '123456', 'Hữu Lộc', 'Cần Thơ', '0333033333', 3);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bartending`
--
ALTER TABLE `bartending`
  ADD PRIMARY KEY (`b_id`);

--
-- Chỉ mục cho bảng `bartending_detail`
--
ALTER TABLE `bartending_detail`
  ADD PRIMARY KEY (`bd_id`),
  ADD KEY `bd_b_id` (`bd_b_id`),
  ADD KEY `bd_ing_id` (`bd_ing_id`);

--
-- Chỉ mục cho bảng `costs_incurred`
--
ALTER TABLE `costs_incurred`
  ADD PRIMARY KEY (`ci_id`),
  ADD KEY `ci_u_id` (`ci_u_id`),
  ADD KEY `ci_stt_id` (`ci_stt_id`);

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`c_id`),
  ADD KEY `c_ct_id` (`c_ct_id`);

--
-- Chỉ mục cho bảng `customer_type`
--
ALTER TABLE `customer_type`
  ADD PRIMARY KEY (`ct_id`);

--
-- Chỉ mục cho bảng `duties`
--
ALTER TABLE `duties`
  ADD PRIMARY KEY (`d_id`);

--
-- Chỉ mục cho bảng `import_bill`
--
ALTER TABLE `import_bill`
  ADD PRIMARY KEY (`ib_id`),
  ADD KEY `import_bill_idfk_1` (`ib_s_id`);

--
-- Chỉ mục cho bảng `import_bill_detail`
--
ALTER TABLE `import_bill_detail`
  ADD PRIMARY KEY (`ibd_id`),
  ADD KEY `ibd_ib_id` (`ibd_ib_id`),
  ADD KEY `ibd_ing_id` (`ibd_ing_id`);

--
-- Chỉ mục cho bảng `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`ing_id`);

--
-- Chỉ mục cho bảng `ingredient_price`
--
ALTER TABLE `ingredient_price`
  ADD PRIMARY KEY (`ip_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`o_id`),
  ADD KEY `o_u_id` (`o_u_id`),
  ADD KEY `o_c_id` (`o_c_id`),
  ADD KEY `o_t_id` (`o_t_id`),
  ADD KEY `orders_ibfk_4` (`o_s_id`);

--
-- Chỉ mục cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`od_id`),
  ADD KEY `od_o_id` (`od_o_id`),
  ADD KEY `od_pro_id` (`od_pro_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pro_id`);

--
-- Chỉ mục cho bảng `product_price`
--
ALTER TABLE `product_price`
  ADD PRIMARY KEY (`pp_id`);

--
-- Chỉ mục cho bảng `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`pt_id`);

--
-- Chỉ mục cho bảng `shifts`
--
ALTER TABLE `shifts`
  ADD PRIMARY KEY (`s_id`);

--
-- Chỉ mục cho bảng `statistical`
--
ALTER TABLE `statistical`
  ADD PRIMARY KEY (`s_id`);

--
-- Chỉ mục cho bảng `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`t_id`);

--
-- Chỉ mục cho bảng `timekeeping`
--
ALTER TABLE `timekeeping`
  ADD PRIMARY KEY (`tk_id`),
  ADD KEY `tk_u_id` (`tk_u_id`),
  ADD KEY `tk_s_id` (`tk_s_id`),
  ADD KEY `timekeeping_ibfk_3` (`t_s_id`);

--
-- Chỉ mục cho bảng `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`unit_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`u_id`),
  ADD KEY `u_d_id` (`u_d_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `bartending`
--
ALTER TABLE `bartending`
  MODIFY `b_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `bartending_detail`
--
ALTER TABLE `bartending_detail`
  MODIFY `bd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `costs_incurred`
--
ALTER TABLE `costs_incurred`
  MODIFY `ci_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `customers`
--
ALTER TABLE `customers`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `customer_type`
--
ALTER TABLE `customer_type`
  MODIFY `ct_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `import_bill`
--
ALTER TABLE `import_bill`
  MODIFY `ib_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT cho bảng `import_bill_detail`
--
ALTER TABLE `import_bill_detail`
  MODIFY `ibd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT cho bảng `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `ing_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `ingredient_price`
--
ALTER TABLE `ingredient_price`
  MODIFY `ip_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `o_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=303;

--
-- AUTO_INCREMENT cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `od_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=273;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `pro_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT cho bảng `product_price`
--
ALTER TABLE `product_price`
  MODIFY `pp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `product_type`
--
ALTER TABLE `product_type`
  MODIFY `pt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `shifts`
--
ALTER TABLE `shifts`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `statistical`
--
ALTER TABLE `statistical`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `tables`
--
ALTER TABLE `tables`
  MODIFY `t_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `timekeeping`
--
ALTER TABLE `timekeeping`
  MODIFY `tk_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT cho bảng `unit`
--
ALTER TABLE `unit`
  MODIFY `unit_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bartending_detail`
--
ALTER TABLE `bartending_detail`
  ADD CONSTRAINT `bartending_detail_ibfk_1` FOREIGN KEY (`bd_b_id`) REFERENCES `bartending` (`b_id`),
  ADD CONSTRAINT `bartending_detail_ibfk_2` FOREIGN KEY (`bd_ing_id`) REFERENCES `ingredient` (`ing_id`);

--
-- Các ràng buộc cho bảng `costs_incurred`
--
ALTER TABLE `costs_incurred`
  ADD CONSTRAINT `costs_incurred_ibfk_1` FOREIGN KEY (`ci_u_id`) REFERENCES `users` (`u_id`),
  ADD CONSTRAINT `costs_incurred_ibfk_2` FOREIGN KEY (`ci_stt_id`) REFERENCES `statistical` (`s_id`);

--
-- Các ràng buộc cho bảng `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`c_ct_id`) REFERENCES `customer_type` (`ct_id`);

--
-- Các ràng buộc cho bảng `import_bill`
--
ALTER TABLE `import_bill`
  ADD CONSTRAINT `import_bill_idfk_1` FOREIGN KEY (`ib_s_id`) REFERENCES `statistical` (`s_id`);

--
-- Các ràng buộc cho bảng `import_bill_detail`
--
ALTER TABLE `import_bill_detail`
  ADD CONSTRAINT `import_bill_detail_ibfk_1` FOREIGN KEY (`ibd_ib_id`) REFERENCES `import_bill` (`ib_id`),
  ADD CONSTRAINT `import_bill_detail_ibfk_2` FOREIGN KEY (`ibd_ing_id`) REFERENCES `ingredient` (`ing_id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`o_u_id`) REFERENCES `users` (`u_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`o_c_id`) REFERENCES `customers` (`c_id`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`o_t_id`) REFERENCES `tables` (`t_id`),
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`o_s_id`) REFERENCES `statistical` (`s_id`);

--
-- Các ràng buộc cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`od_o_id`) REFERENCES `orders` (`o_id`),
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`od_pro_id`) REFERENCES `products` (`pro_id`);

--
-- Các ràng buộc cho bảng `timekeeping`
--
ALTER TABLE `timekeeping`
  ADD CONSTRAINT `timekeeping_ibfk_1` FOREIGN KEY (`tk_u_id`) REFERENCES `users` (`u_id`),
  ADD CONSTRAINT `timekeeping_ibfk_2` FOREIGN KEY (`tk_s_id`) REFERENCES `shifts` (`s_id`),
  ADD CONSTRAINT `timekeeping_ibfk_3` FOREIGN KEY (`t_s_id`) REFERENCES `statistical` (`s_id`);

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`u_d_id`) REFERENCES `duties` (`d_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
