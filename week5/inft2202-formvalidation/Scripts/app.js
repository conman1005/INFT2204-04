

class Contact
{
    constructor(contactName = "", emailAddress = "", contactNumber = "", contactMessage = "")
    {
        this.contactName = contactName;
        this.emailAddress = emailAddress;
        this.contactNumber = contactNumber;
        this.contactMessage = contactMessage;
    }
}




"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app) {

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let contactObject = new Contact();

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
       PageSwitcher();

        
       
       



      

        Main();
    }

    function PageSwitcher()
    {
       let name = window.location.pathname;

       //let pageName = name.substring(1, name.length - 5);
       let pageName = name.split("/")[3];
       console.log(pageName);

       switch(pageName)
        {
            case "index.html":
               DisplayHomePageContent();
                break;
            case "products.html":
                DisplayProductsContent();
                break;
            case "services.html":
                DisplayServicesContent();
                break;
            case "about.html":
                DisplayAboutContent();
                break;
            case "contact.html":
                DisplayContactContent();
                break;
            case "projects.html":
                DisplayProjectsContent();
                break;
            default:
                console.error("Landed in a page that is not defined");
                break;
        }

        // add a class of active to the active link
        $("#"+pageName).addClass("active");
    }

    function DisplayHomePageContent()
    {
        document.getElementById("home").className = "nav-item active";
        $("button").click(()=>{
            location.href = "projects.html";
        });
    }

    function DisplayProductsContent()
    {

    }

    function DisplayServicesContent()
    {

    }

    function DisplayAboutContent()
    {

    }

    function DisplayContactContent()
    {
        function clearForm()
        {
            //document.getElementById("contactForm").reset();
            $("#contactForm")[0].reset();
        }

        function validateInput(selector, condition, errorMessage) {
            if (condition) {
                $("#errorMessage").show();
                $("#errorMessage").text(errorMessage);
                $(selector).select();
                $(selector).css("border", "2px solid red");
            }
            else {
                $("#errorMessage").hide();
                $(selector).css("border", "1px solid green");
            }
        }

        $("#contactName").change((e)=>
        {
            if( $("#contactName").length < 8)
            {
                console.log("Contact Name Too Short");
            }
            console.log("changed");
        });

        $("#contactName").focus((e)=>
        {
            $("#contactName").select();
            console.log("focus");
        });

        $("#emailAddress").blur((e) => {
            validateInput
        });


        $("#submitButton").click((e)=>
        {
            e.preventDefault();
            let contactName = $("#contactName").val();
            let emailAddress = $("#emailAddress").val();
            let contactNumber = $("#contactNumber").val();
            let contactMessage = $("#contactMessage").val();

            console.log(`Contact Name: ${contactName}`);
            console.log(`Email Address: ${emailAddress}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Contact Message: ${contactMessage}`);

            contactObject.contactName = contactName;
            contactObject.emailAddress = emailAddress;
            contactObject.contactNumber = contactNumber;
            contactObject.contactMessage = contactMessage;

            console.log(contactObject);

            clearForm();
        });

        $("#resetButton").click((e)=>
        {
            e.preventDefault();
            if(confirm("Are You Sure?"))
            {
                clearForm();
            }

            
        });
    }

    function DisplayProjectsContent()
    {

    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
       
    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

