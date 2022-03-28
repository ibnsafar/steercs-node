const express = require('express');
const orgquery = require('../db/1auto/orgquery');
const router = express.Router();


// filtering id
const isValidId = (req, res, next) => {
    if (!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'))
}
// is valid data
const isValidData = (data) => {
    const hasOrgName = typeof data.org_name == 'string' &&
        data.title.trim() != '';
    const hasOrgUsername = typeof data.org_username == 'string' &&
        data.org_username.trim() != '';
    const hasEmail = typeof data.email == 'string' &&
        data.email.trim() != '';
    const hasPassword = typeof data.org_password == 'string' &&
        data.org_password.trim() != '';
    const hasNumber = typeof data.org_number == 'string' &&
        data.org_number.trim() != '';
    return hasOrgName && hasOrgUsername && hasEmail && hasPassword &&
        hasNumber;
}
// create
router.post('/org', (req, res, next) => {
    if (isValidData(req.body)) {
        orgquery.create(req.body).then(data => {
            res.json(
                {
                    message: 'Created',
                    success: true
                }
            )
        })
    }
})
// read
router.get('/', (req, res) => {
    orgquery.readAll().then(orgs => {
        res.json({ data: orgs })
    })
})

router.get('/:id', isValidId, (req, res, next) => {
    orgquery.readOne(req.params.id).then(org => {
        if (org) {
            res.json({ data: org })
        } else {
            next()
        }
    })
})
// update
router.put('/:id', (req, res, next) => {
    if (isValidData(req.body)) {
        orgquery.updateOne(req.params.id, req.body).then(data => {
            res.json({
                message: 'Updated successfully',
                success: true,
                object: data[0].org_username
            })
        })
    } else {
        next(new Error('invalid data'))
    }
})
// delete
router.delete('/:id', (req, res) => {
    orgquery.delete(req.params.id).then(() => {
        res.json({
            success: true
        })
    })
})

module.exports = router;