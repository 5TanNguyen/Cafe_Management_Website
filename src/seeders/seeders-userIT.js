module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('UserITs', [
            {
                email: 'admin@gmail.com',
                password: '12345', // plain text
                firstName: '5Tan',
                lastName: 'Nguyen',
                address: 'VN',
                gender: 1,
                typeRole: 'ROLE',
                keyRole: 'R1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('UserITs', null, {});
    },
};