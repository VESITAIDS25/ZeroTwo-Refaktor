const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()

app.get('/api/schemes', (req, res)=> {
    axios.get('https://eshram.gov.in/employment-schemes').then((response) => {
        const $ = cheerio.load(response.data);
        const schemes = []
        const data = $('.row.schemes-text');
        data.each((i, el) => {
            const title = $(el).find('h5').text()
            const eligibility = $(el).find('.about-li').find('li').text()
            const benefits = $(el).find('.about-li').find('li').text()
           
            schemes.push({
                title, eligibility
            })
        })

        res.json(schemes)

    })
})

//url = ‘https://www.linkedin.com/jobs/search?keywords=Data%20Scientist&location=Toronto%2C%20Ontario%2C%20Canada&geoId=100025096&trk=public_jobs_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0'
const urls = [
    'https://apna.co/jobs?page=1',
    'https://apna.co/jobs?page=2',
    'https://apna.co/jobs?page=3',
    'https://apna.co/jobs?page=4',
    'https://apna.co/jobs?page=5',
    'https://apna.co/jobs?page=6',
    'https://apna.co/jobs?page=7',
    'https://apna.co/jobs?page=8',
    'https://apna.co/jobs?page=9',
    'https://apna.co/jobs?page=10',
    'https://apna.co/jobs?page=11',
    'https://apna.co/jobs?page=12',
    'https://apna.co/jobs?page=13',
    'https://apna.co/jobs?page=14',
    'https://apna.co/jobs?page=15',
    'https://apna.co/jobs?page=16',
    'https://apna.co/jobs?page=17', 

]

const jobs = []

urls.forEach((url) => {
    console.log(url)
    axios.get(url).then((response) => {
         if(response.data != null) {
            const $ = cheerio.load(response.data);
        
            const data = $('.BrkUH');
            const jcard = data.find('.styles__Container-sc-1eqgvmq-0.fQVZBI');
            jcard.each((i, el) => {
                const link = $(el).find('a').attr('href')
                const header = $(el).find('h3').text()
                const para = $(el).find('p').text()
                const x = $(el).find('.gQfvfz')
               xitems = []
                x.map((i, elx) => {
                    xitems.push($(elx).text())
                })
                const title = $(el).find('a').text()
                const company = $(el).find('p').text()
                const address = $(el).find('span').text()
                const salary = $(el).find('.styles__SalaryText-sc-1eqgvmq-3.kMSQpi').text()
                
                jobs.push(    {
                    title, company, address, salary, header, para, xitems
                })
            })
         }else {
             console.log("error")
         }
      })
})


app.get('/api/jobs', (req, res)=> {
    console.log(jobs.length)
     res.json(jobs)      
})






app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
