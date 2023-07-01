const express = require('express'),
      app = express(),
      port = process.env.PORT || 3525,
      bodyParser = require('body-parser'),
      cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// Require routes
const walletRoutes = require('./routes/wallets_routes')

app.use('/api/wallets', walletRoutes)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
