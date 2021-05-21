module.exports = (sequelize, DataTypes) => {
    const Enrollment = sequelize.define('enrollment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true 
        },
        lrn: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        department_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        section: {
            type: DataTypes.STRING,
            allowNull: false
        },
        yearlevel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastschool_attended: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permanentbarangay: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permanentprovince: {
            type: DataTypes.STRING,
            allowNull: false
        },
        presentbarangay: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    return Enrollment;
};