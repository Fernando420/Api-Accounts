'use strict';

import uuid from 'node-uuid';

export default (req, res, next) => {
  let token = req.headers['x-kapitalBank-map'] || uuid.v4();
  req.map = token;
  res.header('X-kapitalBank-Map', token);
  next();
};