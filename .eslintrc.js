module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }

    },
    "env": {
        "browser": true,
        es6: true
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
        }],
        "react/prop-types": 0,
        "jsx-a11y/anchor-has-content": 0,
        "react/jsx-no-target-blank": 0,
        "react/prefer-stateless-function": 0,
        "class-methods-use-this": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "no-script-url":0,
        "no-underscore-dangle":0,
        "import/prefer-default-export":0,
        "no-return-assign":0,
        "jsx-a11y/label-has-for":0
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
