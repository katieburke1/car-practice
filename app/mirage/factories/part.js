import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { var n = "";
              if (i == 0)
              {
                n = "Goals";
              }
              if (i == 1)
              {
                n = "Competencies";
              }
              if (i == 2)
              {
                n = "Development Needs";
              }
              return n;
          }
});
