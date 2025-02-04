/*
 Navicat Premium Data Transfer

 Source Server         : my_db
 Source Server Type    : MySQL
 Source Server Version : 80037
 Source Host           : localhost:3306
 Source Schema         : node_cafe

 Target Server Type    : MySQL
 Target Server Version : 80037
 File Encoding         : 65001

 Date: 04/02/2025 16:53:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for addcodes
-- ----------------------------
DROP TABLE IF EXISTS `addcodes`;
CREATE TABLE `addcodes`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `valueEn` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `valueVi` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of addcodes
-- ----------------------------

-- ----------------------------
-- Table structure for allcodes
-- ----------------------------
DROP TABLE IF EXISTS `allcodes`;
CREATE TABLE `allcodes`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `valueEn` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `valueVi` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of allcodes
-- ----------------------------

-- ----------------------------
-- Table structure for bartending
-- ----------------------------
DROP TABLE IF EXISTS `bartending`;
CREATE TABLE `bartending`  (
  `b_id` int NOT NULL AUTO_INCREMENT,
  `b_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `b_description` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`b_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bartending
-- ----------------------------
INSERT INTO `bartending` VALUES (1, 'Cà phê sữa đá', 'Bước 1: Pha nước cốt cà phê đen: Pha phin nhỏ thì dùng 20g cà phê + ít muối ăn + 40ml nước sôi, đợi 2 phút rót thêm 50ml nước sôi. Thu được 40ml nước cốt cà phê.\r\n\r\nBước 2: Pha ly 16oz 450ml, size vừa: Đong 25ml sữa đặc vào ly, tiếp theo cho đá đầy ly.\r\n\r\nBước 3 : Lấy 20ml nước cốt cà phê đã pha ở bước 1 vào ly. Tiếp theo đong 20ml cốt cafe, dùng cây đánh lên bọt từ 15-20 giây, rót lên bề mặt là hoàn thành.\r\nBước 4: hehe');
INSERT INTO `bartending` VALUES (2, 'Cà phê sữa chua', 'Bước 1: Pha cafe\r\nPha cafe bằng phin: Đầu tiên, bạn cần tráng phin qua nước nóng để giảm chênh lệch nhiệt độ của phin và nhiệt độ môi trường, rồi mới cho cafe vào. Thêm 40ml nước nóng ở 85 – 95 độ C, nén chặt và chờ đến khi cafe chảy hết. Lưu ý bạn cần rót nước theo vòng tròn để nước ngấm đều vào cafe trong phin. \r\nBước 2: Pha cafe sữa chua \r\nCách 1: Không cần bình lắc hay máy xay sinh tố \r\n\r\nĐổ sữa đặc vào cốc trước, lớp sữa đặc cao khoảng 3cm rồi mới thêm cafe và nước cốt chanh vào. \r\nSau đó, đổ sữa chua vào khuấy nhẹ để tạo hình nghệ thuật bắt mắt. \r\nCuối cùng, bạn cho thêm đá bào, dùng thìa trộn đều và thưởng thức.\r\nCách 3: Làm cafe sữa chua sử dụng bình lắc \r\n\r\nBạn cho hỗn hợp sữa đặc, sữa chua và nước cốt chanh, đá vào bình lắc rồi lắc đều tay trong khoảng 10 giây để hỗn hợp hòa quyện. \r\nSau đó, đổ ra cốc cho cà phê lên trên và thưởng thức.');
INSERT INTO `bartending` VALUES (3, 'Cà phê sữa dừa', 'Bước 1 Pha hỗn hợp sữa đặc và sữa tươi\r\nBạn rót vào ly 30ml sữa đặc và 10ml sữa tươi, sau đó cho một ít đá lạnh vào, khoảng đến gần đầy ly.\r\n\r\nBước 2 Hoàn thiện ly cà phê sữa dừa\r\nBạn tiếp tục rót 50ml nước cốt cà phê và khoảng 40-45ml nước cốt dừa. Nếu thích ngọt hơn, bạn có thể cho thêm 5ml nước đường.\r\n\r\nVậy là ly cà phê sữa dừa đã hoàn thành.\r\n\r\n3Thành phẩm Ly cà phê sữa dừa có màu sắc bắt mắt và hương vị vô cùng thơm ngon. Đây sẽ là thức uống giúp bạn giải tỏa căng thẳng và tăng khả năng tỉnh táo khi học tập và làm việc.');
INSERT INTO `bartending` VALUES (4, 'Bạc Xỉu', 'Sau khi đã có các nguyên liệu và dụng cụ cần thiết, quy trình pha chế cà phê 3 tầng gồm các bước sau:\r\n\r\nBước 1: Từ nguyên liệu bột cà phê, bạn tiến hành chiết xuất nước cốt cà phê bằng phin pha cà phê. Kết thúc bước 1 bạn sẽ thu được khoảng 40ml nước cốt cà phê rang xay nguyên chất.\r\n\r\nBước 2: Cho nước cốt cà phê nguyên chất vào bình lắc pha chế cùng với một ít đá viên rồi tiến hành lắc tạo bọt trong khoảng thời gian khoảng 30 giây.\r\n\r\nBước 3: Tầng thứ nhất của ly cà phê sẽ được tạo bởi sữa tươi và sữa đặc, dùng thìa để khuấy trộn hỗn hợp này với nhau.\r\n\r\nBước 4: Tầng thứ hai sẽ được tạo bởi cà phê nguyên chất vừa được tạo bọt.\r\n\r\nBước 5: Cho lớp kem sữa tươi lên trên cùng là bạn đã hoàn thành ly cà phê 3 tầng vô cùng bắt mắt và có hương vị thơm ngon.');
INSERT INTO `bartending` VALUES (5, 'Trà Đào Cam Sả', 'Bước 1: Đầu tiên, bạn đun sôi 1.5 lít nước với 2 cây sả đã cắt khúc tầm trong khoảng 10-15 phút.\r\nBước 2: Kế tiếp, bạn sẽ vớt sả ra để riêng, sau đó cho 200 ml nước sả vừa nấu vào ly, rồi bỏ 3 túi lọc hương đào vào ngâm trong khoảng 5-10 phút ( tùy vào khẩu vị thích trà đậm hay trà nhạt mà canh thời gian)\r\nBước 3: Tiếp đến, bạn mang cam cắt đôi, cắt 2-3 lát ngang mỏng bỏ riêng. Phần còn lại vắt lấy nước.\r\nBước 4: Sau đó cho nước cam vào phần trà đã ngâm trước đó, tiếp tục thêm đường (tuỳ theo khẩu vị của bạn), 1 ít nước đào ngâm, 2 lát cam, vài lát đào ngâm và đá viên. ');
INSERT INTO `bartending` VALUES (6, 'Trà Đào Kem Cheese', 'Bước 1 Pha trà đào\r\nBạn cho 5g trà xanh vào bình, sau đó cho vào 150ml nước nóng ở nhiệt độ 85 - 90 độ C. Bạn ủ trà trong khoảng 7 phút.\r\nTiếp theo, bạn lọc bỏ phần bã trà và giữ lại nước cốt trà (còn khoảng 130ml).\r\n\r\nBước 2 Làm kem cheese\r\nBạn cho vào ly 50ml sữa tươi không đường, 4 miếng phô mai, 0.5g muối và 10ml nước đường.\r\nTiếp theo, bạn dùng máy trộn bột cầm tay đánh đều hỗn hợp.\r\nBạn tiếp tục cho vào ly 50ml kem Ambiante, sau đó dùng máy đánh đều hỗn hợp một lần nữa để kem cheese được sánh mịn.\r\n\r\nBước 3 Thành phẩm trà đào kem cheeseBạn cho đá viên vào ly, sau đó cho vào 130ml nước cốt trà đã pha.\r\n\r\nBạn tiếp tục cho vào ly 10ml nước đường và dùng muỗng khuấy đều. Sau đó bạn cho vào 20ml siro đào.Cuối cùng, bạn cho phần kem cheese đã làm lên phía trên. Trang trí thêm một ít đào miếng và các topping vị đào. Hoặc bạn có thể thay thế bằng các loại topping khác tùy theo sở thích.');
INSERT INTO `bartending` VALUES (7, 'Trà Cam Đào Dâu Tây', 'Sài Dâu Tây');
INSERT INTO `bartending` VALUES (8, 'Trà Đào Cam Quế', 'Sài Quế');
INSERT INTO `bartending` VALUES (9, 'Lipton nóng', 'Sài nước nóng');
INSERT INTO `bartending` VALUES (10, 'Lipton lạnh', 'Bước 1: Rót 4 ly nước nóng và thả 2 túi trà vào bình trà.\r\n\r\nBước 2: Ngâm túi trà từ 3 đến 5 phút. Lấy túi trà ra và cho thêm đường.\r\n\r\nBước 3: Rót 6 ly đá viên (hoặc có thể thay thế bằng 4 ly nước lạnh) vào bình và khuấy cho đến khi đá tan.\r\n\r\nBước 4: Bạn thêm vài lát chanh tươi để tạo vị chua và hoàn thành một cốc trà lipton ice tea đá đơn giản, hấp dẫn rồi.');
INSERT INTO `bartending` VALUES (11, 'Trà tắc', 'Chỉ dùng tắc');
INSERT INTO `bartending` VALUES (12, 'Trà lai', 'Dùng trà và cà phê');
INSERT INTO `bartending` VALUES (13, 'Milo lạnh', 'Dùng đá');
INSERT INTO `bartending` VALUES (14, 'Milo đá xay', 'Xay nhuyễn đá');
INSERT INTO `bartending` VALUES (15, 'Trà đường', 'Dùng đường');
INSERT INTO `bartending` VALUES (16, 'Trà nóng', 'Dùng nước nóng');
INSERT INTO `bartending` VALUES (17, 'Matcha thường', 'Bình thường');
INSERT INTO `bartending` VALUES (18, 'Matcha đá xay', 'Xay nhuyễn đá');
INSERT INTO `bartending` VALUES (19, 'Trà đào', 'Bước 1 : Ủ phần trà : Lấy 50g trà đen Lộc Phát hoặc Olong Lộc Phát cho vào túi vải lọc trà + 4 lít nước sôi 100 độ >>> Cho vào bình ủ đậy nắp, ủ 20 phút >>> Vớt tủi vải lọc trà và ra, cho 7,5 ml muối ăn >>> Thu được hồng trà.\r\n\r\nBước 2 : Pha chế ly 500ml \r\n\r\nLấy 120ml nước cốt hồng trà Lộc Phát  (300đ).Có thể thay thế hồng trà Lộc Phát thành Olong Lộc Phát (500đ)\r\n\r\n5ml nước đường (200đ)\r\n\r\n10 ml siro đào Tessire (2.500đ) hoặc Golden Farm (800đ)\r\n\r\n1 gói cozy đào hòa tan (1.400đ). Có thể lấy Cozy hòa tan thành Lipton hòa tan (2.200đ)\r\n\r\nKhuấy đều hỗn hợp\r\n\r\nCho 3 hoặc 4 lát đào tươi vào mỗi ly (4-5k). Có thể trang trí thêm 2 lát sả tươi.');

-- ----------------------------
-- Table structure for bartending_detail
-- ----------------------------
DROP TABLE IF EXISTS `bartending_detail`;
CREATE TABLE `bartending_detail`  (
  `bd_id` int NOT NULL AUTO_INCREMENT,
  `bd_b_id` int NOT NULL,
  `bd_ing_id` int NOT NULL,
  `bd_amount` float NULL DEFAULT NULL,
  PRIMARY KEY (`bd_id`) USING BTREE,
  INDEX `bd_b_id`(`bd_b_id` ASC) USING BTREE,
  INDEX `bd_ing_id`(`bd_ing_id` ASC) USING BTREE,
  CONSTRAINT `bartending_detail_ibfk_1` FOREIGN KEY (`bd_b_id`) REFERENCES `bartending` (`b_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `bartending_detail_ibfk_2` FOREIGN KEY (`bd_ing_id`) REFERENCES `ingredient` (`ing_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bartending_detail
-- ----------------------------
INSERT INTO `bartending_detail` VALUES (5, 1, 1, 0.05);
INSERT INTO `bartending_detail` VALUES (6, 1, 4, 50);
INSERT INTO `bartending_detail` VALUES (12, 19, 2, 0.2);
INSERT INTO `bartending_detail` VALUES (13, 19, 7, 10);
INSERT INTO `bartending_detail` VALUES (14, 10, 3, 2);
INSERT INTO `bartending_detail` VALUES (15, 2, 1, 5);
INSERT INTO `bartending_detail` VALUES (16, 2, 8, 1);
INSERT INTO `bartending_detail` VALUES (17, 2, 9, 50);
INSERT INTO `bartending_detail` VALUES (18, 3, 4, 40);
INSERT INTO `bartending_detail` VALUES (19, 3, 1, 50);
INSERT INTO `bartending_detail` VALUES (20, 3, 10, 1);
INSERT INTO `bartending_detail` VALUES (21, 4, 1, 25);
INSERT INTO `bartending_detail` VALUES (22, 4, 4, 150);
INSERT INTO `bartending_detail` VALUES (23, 5, 11, 50);
INSERT INTO `bartending_detail` VALUES (24, 5, 2, 1);
INSERT INTO `bartending_detail` VALUES (25, 5, 12, 1);
INSERT INTO `bartending_detail` VALUES (26, 6, 13, 5);
INSERT INTO `bartending_detail` VALUES (27, 6, 14, 20);
INSERT INTO `bartending_detail` VALUES (28, 6, 15, 4);
INSERT INTO `bartending_detail` VALUES (29, 6, 4, 400);
INSERT INTO `bartending_detail` VALUES (30, 6, 16, 50);

-- ----------------------------
-- Table structure for bookings
-- ----------------------------
DROP TABLE IF EXISTS `bookings`;
CREATE TABLE `bookings`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `statusId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `doctorId` int NULL DEFAULT NULL,
  `patientId` int NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL,
  `timeType` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bookings
-- ----------------------------

-- ----------------------------
-- Table structure for branch
-- ----------------------------
DROP TABLE IF EXISTS `branch`;
CREATE TABLE `branch`  (
  `br_id` int NOT NULL AUTO_INCREMENT,
  `br_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`br_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of branch
-- ----------------------------
INSERT INTO `branch` VALUES (1, 'Home');
INSERT INTO `branch` VALUES (2, 'Can Tho');

-- ----------------------------
-- Table structure for carts
-- ----------------------------
DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `state` tinyint(1) NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productn_id` int NULL DEFAULT NULL,
  `customer_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `productn_id`(`productn_id` ASC) USING BTREE,
  INDEX `customer_id`(`customer_id` ASC) USING BTREE,
  CONSTRAINT `Carts_customer_id_foreign_idx` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_10` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_11` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_3` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_4` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_5` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_6` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_7` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_8` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_9` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of carts
-- ----------------------------

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(350) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------

-- ----------------------------
-- Table structure for clinics
-- ----------------------------
DROP TABLE IF EXISTS `clinics`;
CREATE TABLE `clinics`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of clinics
-- ----------------------------

-- ----------------------------
-- Table structure for costs_incurred
-- ----------------------------
DROP TABLE IF EXISTS `costs_incurred`;
CREATE TABLE `costs_incurred`  (
  `ci_id` int NOT NULL AUTO_INCREMENT,
  `ci_name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ci_cost` float NULL DEFAULT NULL,
  `ci_u_id` int NULL DEFAULT NULL,
  `ci_stt_id` int NOT NULL,
  `ci_br_id` int NOT NULL COMMENT 'Id branch',
  PRIMARY KEY (`ci_id`) USING BTREE,
  INDEX `ci_u_id`(`ci_u_id` ASC) USING BTREE,
  INDEX `ci_stt_id`(`ci_stt_id` ASC) USING BTREE,
  CONSTRAINT `costs_incurred_ibfk_2` FOREIGN KEY (`ci_stt_id`) REFERENCES `statistical` (`s_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of costs_incurred
-- ----------------------------
INSERT INTO `costs_incurred` VALUES (1, 'Tiền dọn rác', 50000, NULL, 10, 1);
INSERT INTO `costs_incurred` VALUES (2, 'Tiền điện', 200000, NULL, 11, 2);
INSERT INTO `costs_incurred` VALUES (3, 'Phí X', 20000, NULL, 11, 1);
INSERT INTO `costs_incurred` VALUES (4, 'Tiền giấy in', 25000, NULL, 16, 2);
INSERT INTO `costs_incurred` VALUES (5, 'Phí vệ sinh', 50000, NULL, 16, 1);
INSERT INTO `costs_incurred` VALUES (6, 'Phí Y', 25000, NULL, 16, 2);
INSERT INTO `costs_incurred` VALUES (7, 'Phí A', 100000, NULL, 16, 1);

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lastName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` tinyint(1) NULL DEFAULT 1,
  `phone` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` tinyint(1) NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customers
-- ----------------------------

-- ----------------------------
-- Table structure for customertypes
-- ----------------------------
DROP TABLE IF EXISTS `customertypes`;
CREATE TABLE `customertypes`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customertypes
-- ----------------------------

-- ----------------------------
-- Table structure for doctor_clinic_specialties
-- ----------------------------
DROP TABLE IF EXISTS `doctor_clinic_specialties`;
CREATE TABLE `doctor_clinic_specialties`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctorId` int NULL DEFAULT NULL,
  `clinicId` int NULL DEFAULT NULL,
  `specialtyId` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor_clinic_specialties
-- ----------------------------

-- ----------------------------
-- Table structure for doctor_clinic_specialty
-- ----------------------------
DROP TABLE IF EXISTS `doctor_clinic_specialty`;
CREATE TABLE `doctor_clinic_specialty`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctorId` int NULL DEFAULT NULL,
  `clinicId` int NULL DEFAULT NULL,
  `specialtyId` int NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor_clinic_specialty
-- ----------------------------

-- ----------------------------
-- Table structure for histories
-- ----------------------------
DROP TABLE IF EXISTS `histories`;
CREATE TABLE `histories`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `patientId` int NULL DEFAULT NULL,
  `doctorId` int NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `files` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of histories
-- ----------------------------

-- ----------------------------
-- Table structure for import_bill
-- ----------------------------
DROP TABLE IF EXISTS `import_bill`;
CREATE TABLE `import_bill`  (
  `ib_id` int NOT NULL AUTO_INCREMENT,
  `ib_name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ib_date` datetime NULL DEFAULT NULL,
  `ib_cost` float NOT NULL,
  `ib_s_id` int NOT NULL COMMENT 'Id statistical',
  `ib_br_id` int NOT NULL COMMENT 'Id branch',
  PRIMARY KEY (`ib_id`) USING BTREE,
  INDEX `import_bill_idfk_1`(`ib_s_id` ASC) USING BTREE,
  CONSTRAINT `import_bill_idfk_1` FOREIGN KEY (`ib_s_id`) REFERENCES `statistical` (`s_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of import_bill
-- ----------------------------
INSERT INTO `import_bill` VALUES (29, 'Đơn 21/3 lần 2', '2023-03-21 15:59:59', 100000, 4, 0);
INSERT INTO `import_bill` VALUES (30, 'Đơn Nhập 26-3', '2023-03-26 12:21:34', 500000, 9, 0);
INSERT INTO `import_bill` VALUES (31, 'Đơn nhập 27/3', '2023-03-27 12:00:20', 1100000, 10, 0);
INSERT INTO `import_bill` VALUES (32, 'Đơn nhập 27/3 lần 2', '2023-03-27 12:00:44', 25000, 10, 0);
INSERT INTO `import_bill` VALUES (33, 'Đơn nhập 4/4', '2023-04-04 13:37:20', 37500000, 16, 0);

-- ----------------------------
-- Table structure for import_bill_detail
-- ----------------------------
DROP TABLE IF EXISTS `import_bill_detail`;
CREATE TABLE `import_bill_detail`  (
  `ibd_id` int NOT NULL AUTO_INCREMENT,
  `ibd_ib_id` int NOT NULL,
  `ibd_ing_id` int NOT NULL,
  `ibd_amount` float NULL DEFAULT NULL,
  `ibd_cost` float NULL DEFAULT NULL,
  PRIMARY KEY (`ibd_id`) USING BTREE,
  INDEX `ibd_ib_id`(`ibd_ib_id` ASC) USING BTREE,
  INDEX `ibd_ing_id`(`ibd_ing_id` ASC) USING BTREE,
  CONSTRAINT `import_bill_detail_ibfk_1` FOREIGN KEY (`ibd_ib_id`) REFERENCES `import_bill` (`ib_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `import_bill_detail_ibfk_2` FOREIGN KEY (`ibd_ing_id`) REFERENCES `ingredient` (`ing_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 66 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of import_bill_detail
-- ----------------------------
INSERT INTO `import_bill_detail` VALUES (60, 29, 1, 2, 100000);
INSERT INTO `import_bill_detail` VALUES (61, 30, 1, 10, 500000);
INSERT INTO `import_bill_detail` VALUES (62, 31, 5, 50, 1100000);
INSERT INTO `import_bill_detail` VALUES (63, 32, 7, 10, 25000);
INSERT INTO `import_bill_detail` VALUES (64, 33, 7, 1000, 2500000);
INSERT INTO `import_bill_detail` VALUES (65, 33, 3, 500, 35000000);

-- ----------------------------
-- Table structure for ingredient
-- ----------------------------
DROP TABLE IF EXISTS `ingredient`;
CREATE TABLE `ingredient`  (
  `ing_id` int NOT NULL AUTO_INCREMENT,
  `ing_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ing_amount` float NOT NULL,
  `ing_unit_id` int NOT NULL,
  `ing_ip_id` int NOT NULL,
  PRIMARY KEY (`ing_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ingredient
-- ----------------------------
INSERT INTO `ingredient` VALUES (1, 'Cà phê hạt', -121.9, 1, 1);
INSERT INTO `ingredient` VALUES (2, 'Đào tươi', 3.8, 1, 2);
INSERT INTO `ingredient` VALUES (3, 'Lipton', 498, 5, 2);
INSERT INTO `ingredient` VALUES (4, 'Sữa', 7810, 2, 4);
INSERT INTO `ingredient` VALUES (5, 'Bơ', 7, 4, 5);
INSERT INTO `ingredient` VALUES (6, 'Muối', 1000, 2, 6);
INSERT INTO `ingredient` VALUES (7, 'siro đào Tessire', 975, 7, 7);
INSERT INTO `ingredient` VALUES (8, 'Chanh', 50, 4, 9);
INSERT INTO `ingredient` VALUES (9, 'Sữa chua', 100, 7, 10);
INSERT INTO `ingredient` VALUES (10, 'Dừa tươi', 49, 4, 11);
INSERT INTO `ingredient` VALUES (11, 'Sả', 500, 2, 12);
INSERT INTO `ingredient` VALUES (12, 'Cam', 50, 4, 13);
INSERT INTO `ingredient` VALUES (13, 'Trà xanh Thái Nguyên', 195, 2, 14);
INSERT INTO `ingredient` VALUES (14, 'Siro vị Đào', 10, 7, 15);
INSERT INTO `ingredient` VALUES (15, 'Phô mai', 96, 2, 16);
INSERT INTO `ingredient` VALUES (16, 'Kem chân châu đường đen Vinamilk', 150, 2, 17);

-- ----------------------------
-- Table structure for ingredient_price
-- ----------------------------
DROP TABLE IF EXISTS `ingredient_price`;
CREATE TABLE `ingredient_price`  (
  `ip_id` int NOT NULL AUTO_INCREMENT,
  `ip_ing_name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ip_price` float NOT NULL,
  `ip_date` date NULL DEFAULT NULL,
  PRIMARY KEY (`ip_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ingredient_price
-- ----------------------------
INSERT INTO `ingredient_price` VALUES (1, 'Cà phê hạt', 50000, '2023-03-03');
INSERT INTO `ingredient_price` VALUES (2, 'Đào tươi', 70000, '2023-02-28');
INSERT INTO `ingredient_price` VALUES (3, 'Lipton', 20000, '2023-03-14');
INSERT INTO `ingredient_price` VALUES (4, 'Sữa', 35000, '2023-03-21');
INSERT INTO `ingredient_price` VALUES (5, 'Bơ', 22000, '2023-03-21');
INSERT INTO `ingredient_price` VALUES (6, 'Muối', 15000, '2023-03-21');
INSERT INTO `ingredient_price` VALUES (7, 'siro đào Tessire', 2500, '2023-03-21');
INSERT INTO `ingredient_price` VALUES (8, 'Đường', 12000, '2023-03-21');
INSERT INTO `ingredient_price` VALUES (9, 'Chanh', 15000, '2023-04-04');
INSERT INTO `ingredient_price` VALUES (10, 'Sữa chua', 40000, '2023-04-04');
INSERT INTO `ingredient_price` VALUES (11, 'Dừa tươi', 15000, '2023-04-04');
INSERT INTO `ingredient_price` VALUES (12, 'Sả', 5000, '2023-04-04');
INSERT INTO `ingredient_price` VALUES (13, 'Cam', 55000, '2023-04-04');
INSERT INTO `ingredient_price` VALUES (14, 'Trà xanh Thái Nguyên', 22000, '2023-04-04');
INSERT INTO `ingredient_price` VALUES (15, 'Siro Vị đào', 57000, '2023-04-04');
INSERT INTO `ingredient_price` VALUES (16, 'Phô mai', 150000, '2023-04-04');
INSERT INTO `ingredient_price` VALUES (17, 'Kem Chân châu đường đen Vinamilk', 60000, '2023-04-04');

-- ----------------------------
-- Table structure for order_detail
-- ----------------------------
DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE `order_detail`  (
  `od_id` int NOT NULL AUTO_INCREMENT,
  `od_o_id` int NOT NULL,
  `od_pro_id` int NOT NULL,
  `od_quantity` float NOT NULL,
  `od_price` float NOT NULL,
  PRIMARY KEY (`od_id`) USING BTREE,
  INDEX `od_o_id`(`od_o_id` ASC) USING BTREE,
  INDEX `od_pro_id`(`od_pro_id` ASC) USING BTREE,
  CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`od_o_id`) REFERENCES `orders` (`o_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`od_pro_id`) REFERENCES `products` (`pro_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 275 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_detail
-- ----------------------------
INSERT INTO `order_detail` VALUES (239, 279, 1, 5, 29000);
INSERT INTO `order_detail` VALUES (240, 280, 1, 5, 29000);
INSERT INTO `order_detail` VALUES (241, 281, 1, 1, 29000);
INSERT INTO `order_detail` VALUES (242, 281, 2, 1, 25000);
INSERT INTO `order_detail` VALUES (245, 283, 3, 5, 20000);
INSERT INTO `order_detail` VALUES (246, 285, 1, 1, 29000);
INSERT INTO `order_detail` VALUES (247, 285, 2, 2, 25000);
INSERT INTO `order_detail` VALUES (248, 285, 3, 1, 20000);
INSERT INTO `order_detail` VALUES (249, 286, 1, 1, 30000);
INSERT INTO `order_detail` VALUES (250, 287, 1, 5, 29000);
INSERT INTO `order_detail` VALUES (251, 288, 1, 1, 29000);
INSERT INTO `order_detail` VALUES (252, 289, 3, 2, 20000);
INSERT INTO `order_detail` VALUES (253, 290, 1, 1, 29000);
INSERT INTO `order_detail` VALUES (254, 290, 2, 1, 25000);
INSERT INTO `order_detail` VALUES (255, 291, 3, 5, 20000);
INSERT INTO `order_detail` VALUES (256, 291, 2, 1, 25000);
INSERT INTO `order_detail` VALUES (257, 292, 1, 2, 28000);
INSERT INTO `order_detail` VALUES (258, 293, 3, 1, 20000);
INSERT INTO `order_detail` VALUES (259, 294, 1, 1, 29000);
INSERT INTO `order_detail` VALUES (260, 295, 1, 2, 29000);
INSERT INTO `order_detail` VALUES (261, 296, 4, 1, 30000);
INSERT INTO `order_detail` VALUES (262, 297, 6, 1, 30000);
INSERT INTO `order_detail` VALUES (263, 298, 32, 5, 28000);
INSERT INTO `order_detail` VALUES (264, 298, 32, 5, 28000);
INSERT INTO `order_detail` VALUES (266, 296, 5, 1, 28000);
INSERT INTO `order_detail` VALUES (268, 296, 32, 1, 28000);
INSERT INTO `order_detail` VALUES (269, 299, 6, 1, 30000);
INSERT INTO `order_detail` VALUES (270, 300, 5, 1, 20000);
INSERT INTO `order_detail` VALUES (271, 301, 6, 1, 30000);
INSERT INTO `order_detail` VALUES (273, 302, 1, 1, 29000);
INSERT INTO `order_detail` VALUES (274, 303, 1, 1, 30000);

-- ----------------------------
-- Table structure for orderdetails
-- ----------------------------
DROP TABLE IF EXISTS `orderdetails`;
CREATE TABLE `orderdetails`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` float NULL DEFAULT NULL,
  `price` float NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ordern_id` int NULL DEFAULT NULL,
  `productn_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `ordern_id`(`ordern_id` ASC) USING BTREE,
  INDEX `productn_id`(`productn_id` ASC) USING BTREE,
  CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`ordern_id`) REFERENCES `orderns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orderdetails_ibfk_3` FOREIGN KEY (`ordern_id`) REFERENCES `orderns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orderdetails_ibfk_4` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orderdetails_ibfk_5` FOREIGN KEY (`ordern_id`) REFERENCES `orderns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orderdetails_ibfk_6` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orderdetails_ibfk_7` FOREIGN KEY (`ordern_id`) REFERENCES `orderns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orderdetails_ibfk_8` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderdetails
-- ----------------------------

-- ----------------------------
-- Table structure for orderns
-- ----------------------------
DROP TABLE IF EXISTS `orderns`;
CREATE TABLE `orderns`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `totalPrice` float NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `state` tinyint(1) NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `customer_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `customer_id`(`customer_id` ASC) USING BTREE,
  CONSTRAINT `Orderns_customer_id_foreign_idx` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orderns_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orderns_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orderns_ibfk_3` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderns
-- ----------------------------

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `o_id` int NOT NULL AUTO_INCREMENT,
  `o_u_id` int NULL DEFAULT NULL,
  `o_c_id` int NOT NULL,
  `o_t_id` int NOT NULL,
  `o_number` int NULL DEFAULT NULL,
  `o_status` tinyint(1) NULL DEFAULT NULL,
  `o_post` tinyint(1) NOT NULL,
  `o_tick` tinyint(1) NOT NULL,
  `o_cost` float NULL DEFAULT NULL,
  `o_time` datetime NULL DEFAULT NULL,
  `o_s_id` int NOT NULL COMMENT 'ID statistical',
  `o_br_id` int NOT NULL COMMENT 'ID branch',
  PRIMARY KEY (`o_id`) USING BTREE,
  INDEX `o_u_id`(`o_u_id` ASC) USING BTREE,
  INDEX `o_t_id`(`o_t_id` ASC) USING BTREE,
  INDEX `orders_ibfk_4`(`o_s_id` ASC) USING BTREE,
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`o_t_id`) REFERENCES `tables` (`t_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`o_s_id`) REFERENCES `statistical` (`s_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 304 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (279, NULL, 1, 2, 1, 1, 0, 0, 145000, '2023-03-21 16:00:56', 4, 0);
INSERT INTO `orders` VALUES (280, NULL, 1, 1, 1, 1, 1, 1, 145000, '2023-03-26 12:20:50', 9, 0);
INSERT INTO `orders` VALUES (281, NULL, 1, 3, 2, 0, 1, 1, 54000, '2023-03-26 22:22:07', 9, 0);
INSERT INTO `orders` VALUES (283, NULL, 1, 2, 1, 1, 1, 1, 100000, '2023-03-27 12:13:32', 10, 0);
INSERT INTO `orders` VALUES (284, NULL, 1, 10, 4, 1, 0, 0, 0, '2023-03-27 14:53:04', 10, 0);
INSERT INTO `orders` VALUES (285, NULL, 1, 3, 3, 1, 1, 1, 99000, '2023-03-28 10:46:06', 11, 0);
INSERT INTO `orders` VALUES (286, NULL, 1, 2, 2, 1, 1, 1, 30000, '2023-03-28 14:20:24', 11, 0);
INSERT INTO `orders` VALUES (287, NULL, 1, 1, 1, 1, 1, 1, 145000, '2023-03-31 22:48:40', 12, 0);
INSERT INTO `orders` VALUES (288, NULL, 1, 2, 1, 1, 1, 1, 29000, '2023-04-02 22:39:18', 13, 0);
INSERT INTO `orders` VALUES (289, NULL, 1, 1, 2, 1, 1, 1, 40000, '2023-04-03 20:36:07', 15, 0);
INSERT INTO `orders` VALUES (290, NULL, 1, 2, 2, 1, 1, 1, 54000, '2023-04-03 20:46:07', 15, 0);
INSERT INTO `orders` VALUES (291, NULL, 1, 6, 6, 1, 1, 1, 125000, '2023-04-04 08:20:34', 16, 0);
INSERT INTO `orders` VALUES (292, NULL, 1, 7, 2, 1, 1, 1, 56000, '2023-04-04 09:04:59', 16, 0);
INSERT INTO `orders` VALUES (293, NULL, 1, 4, 1, 1, 1, 1, 20000, '2023-04-04 09:05:39', 16, 0);
INSERT INTO `orders` VALUES (294, NULL, 1, 6, 1, 1, 1, 1, 29000, '2023-04-04 09:07:18', 16, 0);
INSERT INTO `orders` VALUES (295, NULL, 1, 3, 1, 1, 1, 1, 58000, '2023-04-04 10:00:18', 16, 0);
INSERT INTO `orders` VALUES (296, NULL, 1, 2, 1, 1, 1, 1, 86000, '2023-04-04 10:18:08', 16, 0);
INSERT INTO `orders` VALUES (297, NULL, 1, 1, 1, 1, 1, 1, 30000, '2023-04-04 13:42:54', 16, 0);
INSERT INTO `orders` VALUES (298, NULL, 1, 5, 5, 1, 1, 1, 140000, '2023-04-04 13:44:33', 16, 0);
INSERT INTO `orders` VALUES (299, NULL, 1, 4, 1, 1, 1, 1, 30000, '2023-04-04 13:59:53', 16, 0);
INSERT INTO `orders` VALUES (300, NULL, 1, 6, 1, 1, 1, 1, 20000, '2023-04-04 14:05:00', 16, 0);
INSERT INTO `orders` VALUES (301, NULL, 1, 1, 1, 1, 1, 1, 30000, '2023-04-04 15:03:41', 16, 0);
INSERT INTO `orders` VALUES (302, NULL, 1, 1, 1, 1, 1, 1, 29000, '2023-04-04 15:10:14', 16, 0);
INSERT INTO `orders` VALUES (303, 1, 1, 1, 1, 0, 1, 0, 30000, '2025-02-04 14:08:00', 17, 1);

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `icon` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `url` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of permissions
-- ----------------------------
INSERT INTO `permissions` VALUES (1, 'bx bx-bar-chart-alt-2', 'thongke', 'getThongKe', 'Quản lý thống kê', '2024-10-26 16:42:51', '2024-10-26 16:42:48');
INSERT INTO `permissions` VALUES (2, 'bx bx-receipt', 'donnhap', 'getDonNhap', 'Quản lý đơn nhập', '2024-10-26 16:42:59', '2024-10-26 16:43:02');
INSERT INTO `permissions` VALUES (3, 'bx bx-user', 'nhanvien', 'getAllNhanVien', 'Quản lý nhân viên', '2024-10-28 15:34:23', '2024-10-28 15:34:25');
INSERT INTO `permissions` VALUES (4, 'bx bxs-coffee-bean', 'nguyenlieu', 'getNguyenLieu', 'Quản lý nguyên liệu', '2024-11-06 16:13:57', '2024-11-06 16:14:00');

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `star` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `labelCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `attributesId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `categoryCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `priceCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `areaCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `provinceCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `userId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `roleId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `overviewId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imagesId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `priceNumber` float NULL DEFAULT NULL,
  `areaNumber` float NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of posts
-- ----------------------------

-- ----------------------------
-- Table structure for product_price
-- ----------------------------
DROP TABLE IF EXISTS `product_price`;
CREATE TABLE `product_price`  (
  `pp_id` int NOT NULL AUTO_INCREMENT,
  `pp_pro_name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pp_price` float NOT NULL,
  `pp_date` date NULL DEFAULT NULL,
  PRIMARY KEY (`pp_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_price
-- ----------------------------
INSERT INTO `product_price` VALUES (1, 'Cà phê sửa', 30000, '2023-02-26');
INSERT INTO `product_price` VALUES (2, 'Lipton', 27000, '2023-03-01');
INSERT INTO `product_price` VALUES (3, 'Trà đào ', 25000, '2023-03-08');
INSERT INTO `product_price` VALUES (4, 'Cà phê sữa chua', 30000, '2023-03-08');
INSERT INTO `product_price` VALUES (5, 'Cà phê sữa dừa', 31000, '2023-03-08');
INSERT INTO `product_price` VALUES (6, 'Bạc Xĩu', 32000, '2023-03-08');
INSERT INTO `product_price` VALUES (7, 'Trà Đào Cam Sả', 23000, '2023-03-08');
INSERT INTO `product_price` VALUES (8, 'Trà đào kem Chese', 34000, '2023-03-08');
INSERT INTO `product_price` VALUES (9, 'Trà Cam Đào Dâu Tây', 35000, '2023-03-08');
INSERT INTO `product_price` VALUES (10, 'Lipton nóng', 18000, '2023-03-08');
INSERT INTO `product_price` VALUES (11, 'Trà Tắc', 20000, '2023-03-08');
INSERT INTO `product_price` VALUES (12, 'Trà lai', 15000, '2023-03-08');
INSERT INTO `product_price` VALUES (13, 'Milo lạnh', 22000, '2023-03-08');
INSERT INTO `product_price` VALUES (14, 'Milo đá xay', 26000, '2023-03-08');
INSERT INTO `product_price` VALUES (15, 'Trà đường', 13000, '2023-03-08');
INSERT INTO `product_price` VALUES (16, 'Trà nóng', 10000, '2023-03-08');
INSERT INTO `product_price` VALUES (17, 'Matcha', 22000, '2023-03-08');
INSERT INTO `product_price` VALUES (18, 'Matcha đá xay', 31000, '2023-03-08');

-- ----------------------------
-- Table structure for product_type
-- ----------------------------
DROP TABLE IF EXISTS `product_type`;
CREATE TABLE `product_type`  (
  `pt_id` int NOT NULL AUTO_INCREMENT,
  `pt_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pt_description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`pt_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_type
-- ----------------------------
INSERT INTO `product_type` VALUES (1, 'Nước uống', 'Giải khát');
INSERT INTO `product_type` VALUES (2, 'Đồ ăn', 'Thơm ngon');

-- ----------------------------
-- Table structure for productns
-- ----------------------------
DROP TABLE IF EXISTS `productns`;
CREATE TABLE `productns`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `code` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(350) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `stock` int NULL DEFAULT NULL,
  `state` tinyint(1) NULL DEFAULT NULL,
  `birthday` datetime NULL DEFAULT NULL,
  `deleted` tinyint(1) NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `category_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `category_id`(`category_id` ASC) USING BTREE,
  CONSTRAINT `productns_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productns_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productns_ibfk_3` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productns_ibfk_4` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productns_ibfk_5` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productns_ibfk_6` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productns_ibfk_7` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productns_ibfk_8` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of productns
-- ----------------------------

-- ----------------------------
-- Table structure for productprices
-- ----------------------------
DROP TABLE IF EXISTS `productprices`;
CREATE TABLE `productprices`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` float NULL DEFAULT NULL,
  `beginDate` datetime NULL DEFAULT NULL,
  `endDate` datetime NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productn_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `productn_id`(`productn_id` ASC) USING BTREE,
  CONSTRAINT `productprices_ibfk_2` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productprices_ibfk_3` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productprices_ibfk_4` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productprices_ibfk_5` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productprices_ibfk_6` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productprices_ibfk_7` FOREIGN KEY (`productn_id`) REFERENCES `productns` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of productprices
-- ----------------------------

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `pro_id` int NOT NULL AUTO_INCREMENT,
  `pro_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pro_price` float NOT NULL,
  `pro_description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pro_pt_id` int NOT NULL,
  `pro_pp_id` int NOT NULL,
  `pro_b_id` int NOT NULL,
  PRIMARY KEY (`pro_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 46 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'Cà phê sữa', 28000, 'Hơi béo tí !', 1, 1, 1);
INSERT INTO `products` VALUES (2, 'Trà đào', 25000, 'Trà đào không chua không lấy tiền !', 1, 3, 19);
INSERT INTO `products` VALUES (3, 'Liptonn', 20000, 'Hơi chua tý', 1, 2, 10);
INSERT INTO `products` VALUES (4, 'Cà phê sữa chua', 30000, 'Hơi chua nhiều tí', 1, 4, 2);
INSERT INTO `products` VALUES (5, 'Cà phê sữa dừa', 20000, 'Hơi đắng xíu, thông cảm !', 1, 5, 3);
INSERT INTO `products` VALUES (6, 'Bạc Xĩu', 30000, 'Bao ngon luôn ạ !', 1, 6, 4);
INSERT INTO `products` VALUES (7, 'Trà Đào Cam Sả', 18000, 'Ít đường', 1, 7, 5);
INSERT INTO `products` VALUES (32, 'Trà Đào Kem Cheese', 28000, 'Thơm ngon bổ dưỡng béo', 1, 8, 6);
INSERT INTO `products` VALUES (33, 'Trà Cam Đào Dâu Tây', 35000, 'Sài dâu tây', 1, 9, 7);
INSERT INTO `products` VALUES (34, 'Lipton nóng', 18000, 'Dùng nước nóng', 1, 2, 9);
INSERT INTO `products` VALUES (35, 'Trà tắc', 20000, 'Dùng tắc và trà', 1, 11, 11);
INSERT INTO `products` VALUES (36, 'Trà lai', 12000, 'Dùng trà và cà phê', 1, 12, 12);
INSERT INTO `products` VALUES (37, 'Milo lạnh', 21000, 'Dùng đá', 1, 13, 13);
INSERT INTO `products` VALUES (38, 'Milo đá xay', 25000, 'Xay nhuyễn đá', 1, 14, 14);
INSERT INTO `products` VALUES (39, 'Trà đường', 17000, 'Dùng trà Hoa sen', 1, 15, 15);
INSERT INTO `products` VALUES (40, 'Trà nóng', 19000, 'Không dùng đá', 1, 16, 16);
INSERT INTO `products` VALUES (41, 'Matcha', 26000, 'Mát mẻ', 1, 17, 17);
INSERT INTO `products` VALUES (42, 'Matcha đá xay', 29000, 'Xay nhuyễn đá', 1, 18, 18);
INSERT INTO `products` VALUES (43, '1050ti', 10, 'Card', 0, 0, 0);
INSERT INTO `products` VALUES (44, '1050ti', 10, 'Card', 0, 0, 0);
INSERT INTO `products` VALUES (45, '1050ti', 10, 'Card', 0, 0, 0);

-- ----------------------------
-- Table structure for role_permissions
-- ----------------------------
DROP TABLE IF EXISTS `role_permissions`;
CREATE TABLE `role_permissions`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NULL DEFAULT NULL,
  `permission_id` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `role_id`(`role_id` ASC) USING BTREE,
  INDEX `permission_id`(`permission_id` ASC) USING BTREE,
  CONSTRAINT `role_permissions_ibfk_8` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `role_permissions_ibfk_9` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role_permissions
-- ----------------------------
INSERT INTO `role_permissions` VALUES (1, 1, 1, '2024-10-28 16:11:20', '2024-10-28 16:11:20');
INSERT INTO `role_permissions` VALUES (2, 1, 2, '2024-10-28 16:11:23', '2024-10-28 16:11:23');
INSERT INTO `role_permissions` VALUES (3, 1, 3, '2024-10-28 16:33:26', '2024-10-28 16:33:28');

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'super-admin', 'Super Admin', '2024-10-26 16:03:45', '2024-10-26 16:03:48');
INSERT INTO `roles` VALUES (2, 'admin', 'Admin', '2024-10-26 16:41:32', '2024-10-26 16:41:34');
INSERT INTO `roles` VALUES (3, 'bartender', 'Pha chế', '2024-11-06 16:09:14', '2024-11-06 16:09:16');
INSERT INTO `roles` VALUES (4, 'waiter', 'Phục vụ', '2024-11-06 16:09:30', '2024-11-06 16:09:33');

-- ----------------------------
-- Table structure for schedules
-- ----------------------------
DROP TABLE IF EXISTS `schedules`;
CREATE TABLE `schedules`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `currentNumber` int NULL DEFAULT NULL,
  `maxNumber` int NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL,
  `timeType` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `doctorId` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of schedules
-- ----------------------------

-- ----------------------------
-- Table structure for sections
-- ----------------------------
DROP TABLE IF EXISTS `sections`;
CREATE TABLE `sections`  (
  `section_id` int NOT NULL COMMENT 'ID',
  `section_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Tên khi',
  `section_detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Chi tiết',
  PRIMARY KEY (`section_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sections
-- ----------------------------

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('create-allcode.js');
INSERT INTO `sequelizemeta` VALUES ('create-booking.js');
INSERT INTO `sequelizemeta` VALUES ('create-clinic.js');
INSERT INTO `sequelizemeta` VALUES ('create-customer-24_10_26_ c.js');
INSERT INTO `sequelizemeta` VALUES ('create-customer-24_10_26_ cee.js');
INSERT INTO `sequelizemeta` VALUES ('create-customer-24_10_26_ co.js');
INSERT INTO `sequelizemeta` VALUES ('create-customer-24_10_26_ cop.js');
INSERT INTO `sequelizemeta` VALUES ('create-customer-24_10_26_ copy.js');
INSERT INTO `sequelizemeta` VALUES ('create-customer-24_10_26_.js');
INSERT INTO `sequelizemeta` VALUES ('create-customer-type.js');
INSERT INTO `sequelizemeta` VALUES ('create-doctor-clinic-specialty.js');
INSERT INTO `sequelizemeta` VALUES ('create-history.js');
INSERT INTO `sequelizemeta` VALUES ('create-permission.js');
INSERT INTO `sequelizemeta` VALUES ('create-post.js');
INSERT INTO `sequelizemeta` VALUES ('create-role-permission.js');
INSERT INTO `sequelizemeta` VALUES ('create-role.js');
INSERT INTO `sequelizemeta` VALUES ('create-schedule.js');
INSERT INTO `sequelizemeta` VALUES ('create-specialty.js');
INSERT INTO `sequelizemeta` VALUES ('create-user-24_10_26.js');
INSERT INTO `sequelizemeta` VALUES ('create-user-24-10-26--.js');
INSERT INTO `sequelizemeta` VALUES ('create-user-24-10-26-.js');
INSERT INTO `sequelizemeta` VALUES ('create-user-role.js');
INSERT INTO `sequelizemeta` VALUES ('create-user.js');
INSERT INTO `sequelizemeta` VALUES ('customer-customer-type_.js');
INSERT INTO `sequelizemeta` VALUES ('customer-permission-add-column.js');

-- ----------------------------
-- Table structure for shifts
-- ----------------------------
DROP TABLE IF EXISTS `shifts`;
CREATE TABLE `shifts`  (
  `s_id` int NOT NULL AUTO_INCREMENT,
  `s_name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `s_begin_time` time NULL DEFAULT NULL,
  `s_end_time` time NULL DEFAULT NULL,
  PRIMARY KEY (`s_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shifts
-- ----------------------------
INSERT INTO `shifts` VALUES (1, 'Sáng', '08:00:00', '12:00:00');
INSERT INTO `shifts` VALUES (2, 'Chiều', '12:00:00', '17:00:00');
INSERT INTO `shifts` VALUES (3, 'Tối', '17:00:00', '22:00:00');

-- ----------------------------
-- Table structure for specialties
-- ----------------------------
DROP TABLE IF EXISTS `specialties`;
CREATE TABLE `specialties`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of specialties
-- ----------------------------

-- ----------------------------
-- Table structure for statistical
-- ----------------------------
DROP TABLE IF EXISTS `statistical`;
CREATE TABLE `statistical`  (
  `s_id` int NOT NULL AUTO_INCREMENT,
  `s_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `s_import` float NOT NULL,
  `s_export` float NOT NULL,
  `s_profit` float NOT NULL,
  `s_date` datetime NULL DEFAULT NULL,
  `br_id` int NOT NULL,
  PRIMARY KEY (`s_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of statistical
-- ----------------------------
INSERT INTO `statistical` VALUES (4, 'Thống kê 20/3', 160000, 145000, -15000, '2023-03-20 15:57:00', 0);
INSERT INTO `statistical` VALUES (9, 'Thống Kê 26/3', 620000, 199000, -421000, '2023-03-26 12:18:34', 0);
INSERT INTO `statistical` VALUES (10, 'Thống kê 27/3', 1235000, 100000, -1135000, '2023-03-27 11:58:48', 0);
INSERT INTO `statistical` VALUES (11, 'Thống kê 28/3', 280000, 129000, -151000, '2023-03-28 10:44:49', 0);
INSERT INTO `statistical` VALUES (12, 'Thống kê 31-3', 60000, 145000, 85000, '2023-03-31 22:46:45', 0);
INSERT INTO `statistical` VALUES (13, 'Thống kê 2/4', 180000, 29000, -151000, '2023-04-02 22:36:36', 0);
INSERT INTO `statistical` VALUES (15, 'Thống Kê 3/4', 60000, 94000, 34000, '2023-04-03 20:35:17', 0);
INSERT INTO `statistical` VALUES (16, 'Thống kê 4/4', 37940000, 1324000, -36616000, '2023-04-04 08:19:48', 0);
INSERT INTO `statistical` VALUES (17, 'Thống kê 7-12/10/2024', 0, 0, 0, '2024-10-07 09:01:09', 1);

-- ----------------------------
-- Table structure for tables
-- ----------------------------
DROP TABLE IF EXISTS `tables`;
CREATE TABLE `tables`  (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `t_position` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `t_empty` tinyint(1) NULL DEFAULT NULL,
  `t_pay` tinyint(1) NULL DEFAULT NULL,
  `t_num` int NOT NULL,
  `t_seats` int NULL DEFAULT NULL,
  PRIMARY KEY (`t_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tables
-- ----------------------------
INSERT INTO `tables` VALUES (1, 'kế nhà vệ sinh', 0, 0, 1, 4);
INSERT INTO `tables` VALUES (2, 'kế cột điện', 0, 0, 1, 4);
INSERT INTO `tables` VALUES (3, 'kế bàn thu ngân', 0, 1, 1, 4);
INSERT INTO `tables` VALUES (4, 'kế cửa ra vào', 0, 1, 1, 5);
INSERT INTO `tables` VALUES (5, 'trung tâm quán', 0, 1, 5, 2);
INSERT INTO `tables` VALUES (6, 'Hong biết luôn', 0, 1, 1, 5);
INSERT INTO `tables` VALUES (7, 'Kế bàn số 5', 0, 1, 2, 6);
INSERT INTO `tables` VALUES (8, 'Kế lỗi cổng vào', 0, 0, 1, 5);
INSERT INTO `tables` VALUES (9, 'Kế bà bàn số 8', 0, 0, 2, 4);
INSERT INTO `tables` VALUES (10, 'Kế máy lạnh', 0, 1, 1, 4);
INSERT INTO `tables` VALUES (11, 'Kế bàn số 10', 1, 0, 0, 4);
INSERT INTO `tables` VALUES (12, 'Trung tâm quán', 1, 0, 0, 10);

-- ----------------------------
-- Table structure for timekeeping
-- ----------------------------
DROP TABLE IF EXISTS `timekeeping`;
CREATE TABLE `timekeeping`  (
  `tk_id` int NOT NULL AUTO_INCREMENT,
  `tk_u_id` int NULL DEFAULT NULL,
  `tk_s_id` int NOT NULL,
  `tk_date` datetime NOT NULL,
  `tk_note` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `t_s_id` int NOT NULL,
  `tk_cost` decimal(10, 2) NULL DEFAULT NULL,
  `tk_br_id` int NOT NULL,
  PRIMARY KEY (`tk_id`) USING BTREE,
  INDEX `tk_u_id`(`tk_u_id` ASC) USING BTREE,
  INDEX `tk_s_id`(`tk_s_id` ASC) USING BTREE,
  INDEX `timekeeping_ibfk_3`(`t_s_id` ASC) USING BTREE,
  CONSTRAINT `timekeeping_ibfk_2` FOREIGN KEY (`tk_s_id`) REFERENCES `shifts` (`s_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `timekeeping_ibfk_3` FOREIGN KEY (`t_s_id`) REFERENCES `statistical` (`s_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 44 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of timekeeping
-- ----------------------------
INSERT INTO `timekeeping` VALUES (27, NULL, 2, '2023-03-21 15:59:26', '', 4, NULL, 0);
INSERT INTO `timekeeping` VALUES (28, NULL, 2, '2023-03-26 12:20:07', '', 9, NULL, 0);
INSERT INTO `timekeeping` VALUES (29, NULL, 2, '2023-03-27 12:01:10', '', 9, NULL, 0);
INSERT INTO `timekeeping` VALUES (30, NULL, 3, '2023-03-27 18:51:33', NULL, 10, NULL, 0);
INSERT INTO `timekeeping` VALUES (31, NULL, 1, '2023-03-28 10:45:58', '', 11, NULL, 0);
INSERT INTO `timekeeping` VALUES (34, NULL, 3, '2023-03-31 22:49:18', '', 12, NULL, 0);
INSERT INTO `timekeeping` VALUES (36, NULL, 3, '2023-04-02 22:37:15', '', 13, NULL, 0);
INSERT INTO `timekeeping` VALUES (37, NULL, 3, '2023-04-02 22:38:00', '', 13, NULL, 0);
INSERT INTO `timekeeping` VALUES (38, NULL, 3, '2023-04-03 20:35:24', '', 13, NULL, 0);
INSERT INTO `timekeeping` VALUES (39, NULL, 3, '2023-04-03 20:35:51', '', 15, NULL, 0);
INSERT INTO `timekeeping` VALUES (40, NULL, 1, '2023-04-04 08:20:06', '', 16, NULL, 0);
INSERT INTO `timekeeping` VALUES (41, NULL, 2, '2023-04-04 13:26:08', '', 16, NULL, 0);
INSERT INTO `timekeeping` VALUES (42, NULL, 2, '2023-04-04 13:55:06', '', 16, NULL, 0);
INSERT INTO `timekeeping` VALUES (43, NULL, 2, '2023-04-04 13:53:40', '', 16, NULL, 0);

-- ----------------------------
-- Table structure for unit
-- ----------------------------
DROP TABLE IF EXISTS `unit`;
CREATE TABLE `unit`  (
  `unit_id` int NOT NULL AUTO_INCREMENT,
  `unit_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`unit_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of unit
-- ----------------------------
INSERT INTO `unit` VALUES (1, 'kg');
INSERT INTO `unit` VALUES (2, 'gram');
INSERT INTO `unit` VALUES (3, 'thìa');
INSERT INTO `unit` VALUES (4, 'quả');
INSERT INTO `unit` VALUES (5, 'gói');
INSERT INTO `unit` VALUES (6, 'lít');
INSERT INTO `unit` VALUES (7, 'ml');
INSERT INTO `unit` VALUES (8, 'Hủ');

-- ----------------------------
-- Table structure for user_roles
-- ----------------------------
DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `role_id` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  INDEX `role_id`(`role_id` ASC) USING BTREE,
  CONSTRAINT `user_roles_ibfk_8` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `user_roles_ibfk_9` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_roles
-- ----------------------------
INSERT INTO `user_roles` VALUES (1, 1, 1, '2024-10-28 16:11:13', '2024-10-28 16:11:13');
INSERT INTO `user_roles` VALUES (2, 2, 3, '2024-11-06 16:10:39', '2024-11-06 16:10:42');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `firstName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lastName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phonenumber` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` tinyint(1) NULL DEFAULT NULL,
  `image` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` tinyint(1) NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '5tannguyenhuu@gmail.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 'Tấn', 'Nguyễn', 'Cần Thơ', '0328069555', 1, '5tan.jpg', 1, '2024-10-28 15:33:12', '2024-10-28 15:33:16');
INSERT INTO `users` VALUES (2, '9thoanguyenthikim@gmail.com', '1234', 'Thoa', 'Nguyễn', 'Cần Thơ 56', '0354136300', 0, 'yae2.jpg', 1, '2024-11-06 16:08:14', '2024-11-06 16:08:17');

SET FOREIGN_KEY_CHECKS = 1;
