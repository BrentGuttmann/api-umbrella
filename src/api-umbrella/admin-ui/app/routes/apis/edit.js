import Form from './form';

export default Form.extend({
  model(params) {
    this.clearStoreCache();
    return this.fetchModels(this.store.findRecord('api', params.api_id, { reload: true }));
  },
});
