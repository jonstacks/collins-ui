import DS from 'ember-data';
import ENV from 'collins-ui/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,
  namespace: 'api/v1'
});
