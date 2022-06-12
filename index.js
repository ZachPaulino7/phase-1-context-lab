/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const createEmployeeRecord = (record) => {
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = (records) => {
    return records.map(rec => createEmployeeRecord(rec))
}

const createTimeInEvent = function (clockIn) {
    const [date, hour] = clockIn.split(" ")
    const inEvent = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date,
    }
    this.timeInEvents.push(inEvent)
    return this
}

const createTimeOutEvent = function (clockOut) {
    const [date, hour] = clockOut.split(" ")
    const outEvent = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date,
    }
    this.timeOutEvents.push(outEvent)
    return this
}

const hoursWorkedOnDate = function (targetDate) {
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === targetDate)
    const outEvent = this.timeOutEvents.find(outEvent => outEvent.date === targetDate)
    const hoursWorked = (outEvent.hour - inEvent.hour) / 100

    return hoursWorked
}

const wagesEarnedOnDate = function(targetDate) {
    return hoursWorkedOnDate.call(this, targetDate) * this.payPerHour
}

const findEmployeeByFirstName = function (srcArray, firstName) {
    return srcArray.find(rec => rec.firstName === firstName)
}

const calculatePayroll = function (Array) {
    return Array.reduce((total, rec) => {
        return total + allWagesFor.call(rec)
    }, 0)
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
