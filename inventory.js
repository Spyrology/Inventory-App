var items = [];
var _ = require('lodash');

/*
function findOne(req) {
	return _.find(items, {id: req.params.id});
};
*/

exports.list = function (req, res) {
	res.render('index', {items: items});
};

exports.show = function (req, res) {
	var item = _.find(items, {id: req.params.id});
	res.render('show', item);
	console.log("showing");
};

exports.new = function (req, res) {
	res.render('new');
};

exports.create = function (req, res) {
    var item = {
        id: _.uniqueId,
        name: req.body.name,
        description: req.body.description
    };

    items.push(item);
    res.redirect('/');
    console.log("created");
};

exports.edit = function (req, res) {
	var item = _.find(items, {id: req.params.id});
	res.render('edit', item);
};

exports.update = function (req, res) {
	var id = req.params.id;
	var index = _.findIndex(items, {id: id});
	var item = {
		id: id,
		name: req.body.name,
		description: req.body.description
	};

	items[index] = item;
	console.log('made it');
	res.redirect('/' + id);
};