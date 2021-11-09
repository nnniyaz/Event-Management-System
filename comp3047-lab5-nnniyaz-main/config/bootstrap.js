/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if (await Event.count() > 0) {
    return;
  }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
  await Event.createEach([
    {
      eventName: "Career Talk1",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Career Talk2",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Career Talk3",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Career Talk4",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Career Talk5",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Career Talk6",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Career Talk7",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Career Talk8",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Career Talk9",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Daryn1",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Daryn2",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Daryn3",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Daryn4",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Daryn5",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
    {
      eventName: "Daryn6",
      shortDescription: "Career talk about IT industry",
      longDescription: "",
      imgUrl: "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=2800&h=1134&fit=crop",
      organizer: "Department of Computer Science",
      eventDate: "2021-10-29",
      startTime: "12:30",
      endTime: "15:30",
      venue: "ZOOM",
      quota: 25,
      highlightEvent: "on"
    },
  ]);

};
