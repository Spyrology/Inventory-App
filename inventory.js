var items = [{name: 'Couch', description: 'Ikea this is comfortable!'}, {name: 'Laptop', description: 'Beep boop, goes the laptopt as I create node awesomeness all day long!'}];

exports.list = function (req, res) {
	res.render('index', {items: items});
};