const logger = require('../lib/logger')

logger.info('Starting server...')
require('../../server/main').listen(4000, () => {
  logger.success('Server is running at http://localhost:4000')
})
