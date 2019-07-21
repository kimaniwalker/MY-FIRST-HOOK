// This object should mimic the structure of the object in env/production, but should use actual values
// This object should mimic the structure of the object in env/production, but should use actual values

let cfg = {
    MAILGUN_API_KEY: 'dcefde1813af9271f5d13217ab0664e5-8889127d-b67c3db3',
    /* STRIPE_SK: 'sk_test_spTo8Un05SbMJFrs6EBB7EQp', */
    STRIPE_SK: 'sk_test_qRpYPPOhFkvk6VF8RMLnIKVX00bCXRDcWB',
    CLOUDINARY: 'https://api.cloudinary.com/v1_1/lokiddo/image/upload?upload_preset=muuqonjl',
    db: {
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'kurstyn16',
        database: 'blog',
    },
};

export { cfg };
