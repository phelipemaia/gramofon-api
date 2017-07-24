module.exports = exports = function dateChangesPlugin (schema, options) {
    schema.add({ created: Date, updated: Date });

    schema.pre('save', function (next) {
        this.updated = new Date();
        next();
    });
};