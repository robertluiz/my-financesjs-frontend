module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }

    },
    "env": {
        "browser": true,
    },
    "plugins": [
        "react"
    ],
    "extends": ["webpack", "airbnb"],
    "rules": {
        "import/no-extraneous-dependencies": ["error", {
            "devDependencies": true,
            "optionalDependencies": false,
            "peerDependencies": false
        }]
    },
    "settings": {
        "import/resolver": {
            'alias': [
                ['modules', `${__dirname}/node_modules`],
                ['jquery', 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js'],
                ['bootstrap', 'modules/admin-lte/bootstrap/js/bootstrap.js']
            ]
        }
    },
};