import IconBase from '../components/IconBase';
import IconCalendar from '../components/IconCalendar';

export default () => (
  <main className="group-page">
    <div className="places">
      <p className="top">Group Activities</p>
      <h1>4 Person Trip to Hawaii</h1>
      <hr />
      <div className="wrapper">
        <div className="box item1" />
        <div className="box item2" />
        <div className="box item3" />
        <div className="box item4" />
        <div className="box item5" />
      </div>
    </div>

    <aside className="sidebar">
      <h3>
        <IconBase iconName="calendar">
          <IconCalendar />
        </IconBase>{' '}
        Schedule
      </h3>
      <p className="top">Sunday</p>
      <p>
        Arrival: We settled in and decided to go snorkeling. We saw spotted
        dolphins, tons of whales - one whale went right under the boat, and, of
        course, plenty of sea turtles. The snorkeling area is a little small and
        can get crowded, but we still had great opportunities to watch the
        turtles. The crew was terrific - Jason, Jackson, and Shane. We would
        definitely recommend this activity, and will do it again if we ever get
        back to Hawaii!
      </p>
      <p className="top">Monday</p>
      <p>
        After such an exciting first day, we decided to take it a bit easier and
        just get a nice lunch as our day activity. Had a wonderful time getting
        an opportunity to walk around a few blocks of Ala Moana and sampling
        some of the local eats that you can't really get back home. Every stop
        had something new and interesting to try, and there wasn't a single
        thing I tried that I really disliked.
      </p>
    </aside>
    <style jsx global>
      {`
        .group-page {
          .wrapper {
            margin: 10px 0 20px 0;
            width: 100%;
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(4, 24%);
            grid-template-rows: repeat(3, 120px);
            justify-content: center;
            align-content: end;
          }

          .box {
            border-radius: 3px;
          }

          $img-slug: hawaii !default;
          $class-slug: item !default;

          @for $i from 1 through 6 {
            .#{$class-slug}#{$i} {
              background: url('/static/hawaii#{$i}.jpg')
                center
                center
                no-repeat;
              background-size: cover;
            }
          }

          .item1 {
            grid-column: 1 / 5;
          }

          .item2 {
            grid-column: 1 / 3;
            grid-row: 2 / 4;
          }

          .item3 {
            grid-column: 3 / 5;
          }

          p {
            padding-bottom: 10px;
          }
        }
      `}
    </style>
  </main>
);
