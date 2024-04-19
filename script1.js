function getMonthIndex(monthName) 
{
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    return months.findIndex(month => month.toLowerCase() === monthName.toLowerCase());
}

function extractDate(text) 
{
    const dateRegex = /(\d{1,2})(?:st|nd|rd|th)?\s*(?:of)?\s*(\w+)\s*,?\s*(\d{4})/gi;
    const dates = [];
    let match;
    while ((match = dateRegex.exec(text)) !== null) {
        const day = parseInt(match[1]);
        const month = match[2];
        const year = parseInt(match[3]);
        const date = new Date(year, getMonthIndex(month), day);
        dates.push(date);
    }
    return dates;
}

function findTo(text) 
{
    const regex = /\bto\b/gi;
    const matches = text.match(regex);
    if (matches && matches.length > 0) 
    {
        return true; 
    } 
    else 
    {
        return false;
    }
}

function Check(inputBox,Dates)
{
    if(Dates[1] == null)
    {
        if(Dates[0].getFullYear() == today.getFullYear())
        {
            if(Dates[0].getMonth() == today.getMonth())
            {
                if(Dates[0].getDate() > today.getDate())
                {
                    return "Future";
                }
                else if(Dates[0].getDate() == today.getDate())
                {
                    return "Present";
                }
                else
                {
                    return "Past";
                }
            }
            else if(Dates[0].getMonth() > today.getMonth())
            {
                return "Future";
            }
            else
            {
                return "Past";
            }
        }
        else if(Dates[0].getFullYear() > today.getFullYear())
        {
            return "Future";
        }
        else
        {
            return "Past";
        }
    }
    else
    {
        if(findTo(inputBox) == true)
        {
            if(Dates[0].getFullYear() <= today.getFullYear() && Dates[1].getFullYear() >= today.getFullYear())
            {
                if(Dates[0].getMonth() <= today.getMonth() && Dates[1].getMonth() >= today.getMonth())
                {
                    if(Dates[0].getDate() <= today.getDate() && Dates[1].getDate() >= today.getDate())
                    {
                        return "Present";;
                    }
                    else if(Dates[0].getDate() >= today.getDate() && Dates[1].getDate() >= today.getDate())
                    {
                        return "Future";
                    }
                    else {
                        const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
                        if (Dates[1] >= oneMonthAgo) {
                            return "Past";
                        } else {
                            return "Expired";
                        }
                    }
                }
                else if(Dates[0].getMonth() >= today.getMonth() && Dates[1].getMonth() >= today.getMonth())
                {
                    return "Future";
                }
                else {
                    const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
                    if (Dates[1] >= oneMonthAgo) {
                        return "Past";
                    } else {
                        return "Expired";
                    }
                }
            }
            else if(Dates[0].getFullYear() >= today.getFullYear() && Dates[1].getFullYear() >= today.getFullYear())
            {
                return "Future";
            }
            else {
                const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
                if (Dates[1] >= oneMonthAgo) {
                    return "Past";
                } else {
                    return "Expired";
                }
            }
        }
    }
}

function processInput(inputBox) {
    const upcoming = document.getElementById("upcoming_events_list");
    const todayNotice = document.getElementById("today_notice_list");
    const endEvents = document.getElementById("end_events_list");

    const Dates = extractDate(inputBox);
    
    const Raj = Check(inputBox,Dates);
    if(Raj == "Future")
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox;
        li.style.color = "blue";
        upcoming.appendChild(li);
        found = true;
    }
    else if(Raj == "Present")
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox;
        li.style.color = "rgb(0, 154, 0)";
        li.innerHTML += " (Today)";
        todayNotice.appendChild(li);
        found = true;
    }
    else if(Raj == "Past")
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox + " (The section is over)";
        li.style.color = "red";
        endEvents.appendChild(li);
    }
}