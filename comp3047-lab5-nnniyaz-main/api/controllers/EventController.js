/**
 * EventController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // action - create
    create: async function (req, res) {

        if (req.method == "GET") return res.view('event/create');

        var event = await Event.create(req.body).fetch();

        res.redirect('/event/admin/');
        return res.status(201).json({ id: event.id });
    },
    // action - jsjson function
    json: async function (req, res) {

        var everyones = await Event.find();

        return res.json(everyones);
    },
    // action - admin
    admin: async function (req, res) {

        var everyones = await Event.find();

        return res.view('event/admin', { events: everyones });
    },
    // action - read
    read: async function (req, res) {

        var thatEvent = await Event.findOne(req.params.id);

        if (!thatEvent) return res.notFound();

        return res.view('event/read', { event: thatEvent });
    },
    // action - delete 
    delete: async function (req, res) {

        var deletedEvent = await Event.destroyOne(req.params.id);

        if (!deletedEvent) return res.notFound();

        res.redirect('/event/admin/')
        return res.ok("Event deleted.");
    },
    // action - update
    update: async function (req, res) {

        if (req.method == "GET") {

            var thatEvent = await Event.findOne(req.params.id);

            if (!thatEvent) return res.notFound();

            return res.view('event/update', { event: thatEvent });

        } else {

            var updatedEvent = await Event.updateOne(req.params.id).set(req.body);

            if (!updatedEvent) return res.notFound();

            res.redirect('/event/admin/')
            return res.ok("Record updated");
        }
    },
    // search function
    search: async function (req, res) {

        var whereClause = {};

        if (req.query.eventName) whereClause.eventName = { contains: req.query.eventName };

        if (req.query.organizer) whereClause.organizer = { contains: req.query.organizer };

        if (req.query.venue) whereClause.venue = { contains: req.query.venue };

        // var parsedAge = parseInt(req.query.age);
        // if (!isNaN(parsedAge)) whereClause.age = parsedAge;

        var perPage = Math.max(req.query.perPage, 2) || 2;

        var thoseEvents = await Event.find({
            where: whereClause,
            sort: 'eventName',
        });

        var count = await thoseEvents.length;

        return res.view('event/admin', { events: thoseEvents, total: count});
    },
    // action - paginate
    paginate: async function (req, res) {

        var perPage = Math.max(req.query.perPage, 2) || 2;

        var someEvents = await Event.find({
            limit: perPage,
            skip: perPage * (Math.max(req.query.current - 1, 0) || 0)
        });

        var count = await Event.count();

        return res.view('event/paginate', { events: someEvents, total: count });
    },
    // homepage
    home: async function (req, res) {

        var lastFour = {};

        var perPage = Math.max(req.query.perPage, 4) || 4;

        if (req.query.highlightEvent) lastFour.highlightEvent = { contains: req.query.highlightEvent };

        var highlights = await Event.find({
            where: lastFour,
            sort: 'eventName',
            limit: perPage,
        });

        return res.view('event/home', {events: highlights});
    }

};

