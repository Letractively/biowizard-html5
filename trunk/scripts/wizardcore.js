        // This function handles style and display changes for each next button click
        function handleWizardNext()
        {
            if (document.getElementById('ButtonNext').name == 'Step2')
            {
                // Change the button name - we use this to keep track of which step to display on a click
                document.getElementById('ButtonNext').name = 'Step3';
                document.getElementById('ButtonPrevious').name = 'Step1';
                // Disable/enable buttons when reach reach start and review steps
                document.getElementById('ButtonPrevious').disabled = '';
                // Set new step to display and turn off display of current step
                document.getElementById('Step1').style.display = 'none';
                document.getElementById('Step2').style.display = '';
                // Change background color on header to highlight new step
                document.getElementById('HeaderTableStep2').style.backgroundColor = 'Yellow';
                document.getElementById('HeaderTableStep1').style.backgroundColor = 'Silver';
            }
            else if (document.getElementById('ButtonNext').name == 'Step3')
            {
                // Change the button name - we use this to keep track of which step to display on a click
                document.getElementById('ButtonNext').name = 'Step4';
                document.getElementById('ButtonPrevious').name = 'Step2';
                document.getElementById('Step2').style.display = 'none';
                document.getElementById('Step3').style.display = '';
                // Change background color on header to highlight new step
                document.getElementById('HeaderTableStep3').style.backgroundColor = 'Yellow';
                document.getElementById('HeaderTableStep2').style.backgroundColor = 'Silver';
            }
            else if (document.getElementById('ButtonNext').name == 'Step4')
            {
                // Change the button name - we use this to keep track of which step to display on a click
                document.getElementById('ButtonNext').name = 'Step5';
                document.getElementById('ButtonPrevious').name = 'Step3';
                // Set new step to display and turn off display of current step
                document.getElementById('Step3').style.display = 'none';
                document.getElementById('Step4').style.display = '';
                // Change background color on header to highlight new step
                document.getElementById('HeaderTableStep4').style.backgroundColor = 'Yellow';
                document.getElementById('HeaderTableStep3').style.backgroundColor = 'Silver';
            }
            else if (document.getElementById('ButtonNext').name == 'Step5')
            {
                // Change the button name - we use this to keep track of which step to display on a click
                document.getElementById('ButtonNext').name = '';
                document.getElementById('ButtonPrevious').name = 'Step4';
                // Disable/enable buttons when reach reach start and review steps
                document.getElementById('ButtonNext').disabled = 'disabled';
                document.getElementById('SubmitFinal').disabled = '';
                // Set new step to display and turn off display of current step
                document.getElementById('Step4').style.display = 'none';
                document.getElementById('Step5').style.display = '';
                // Change background color on header to highlight new step
                document.getElementById('HeaderTableStep5').style.backgroundColor = 'Yellow';
                document.getElementById('HeaderTableStep4').style.backgroundColor = 'Silver';
                // Load table elements for final review step
                loadStep5Review();
            }
        }
        // This function handles style and display changes for each previous button click
        function handleWizardPrevious()
        {
           if (document.getElementById('ButtonPrevious').name == 'Step1')
            {
                // Change the button name - we use this to keep track of which step to display on a click
                document.getElementById('ButtonNext').name = 'Step2';
                document.getElementById('ButtonPrevious').name = '';
                // Disable/enable buttons when reach reach start and review steps
                document.getElementById('ButtonPrevious').disabled = 'disabled';
                // Set new step to display and turn off display of current step
                document.getElementById('Step2').style.display = 'none';
                document.getElementById('Step1').style.display = '';
                // Change background color on header to highlight new step
                document.getElementById('HeaderTableStep1').style.backgroundColor = 'Yellow';
                document.getElementById('HeaderTableStep2').style.backgroundColor = 'Silver';
            }
            else if (document.getElementById('ButtonPrevious').name == 'Step2')
            {
                // Change the button name - we use this to keep track of which step to display on a click
                document.getElementById('ButtonNext').name = 'Step3';
                document.getElementById('ButtonPrevious').name = 'Step1';
                // Set new step to display and turn off display of current step
                document.getElementById('Step3').style.display = 'none';
                document.getElementById('Step2').style.display = '';
                // Change background color on header to highlight new step
                document.getElementById('HeaderTableStep2').style.backgroundColor = 'Yellow';
                document.getElementById('HeaderTableStep3').style.backgroundColor = 'Silver';
            }
            else if (document.getElementById('ButtonPrevious').name == 'Step3')
            {
                // Change the button name - we use this to keep track of which step to display on a click
                document.getElementById('ButtonNext').name = 'Step4';
                document.getElementById('ButtonPrevious').name = 'Step2';
                // Set new step to display and turn off display of current step
                document.getElementById('Step4').style.display = 'none';
                document.getElementById('Step3').style.display = '';
                // Change background color on header to highlight new step
                document.getElementById('HeaderTableStep3').style.backgroundColor = 'Yellow';
                document.getElementById('HeaderTableStep4').style.backgroundColor = 'Silver';
            }
            else if (document.getElementById('ButtonPrevious').name == 'Step4')
            {
                // Change the button name - we use this to keep track of which step to display on a click
                document.getElementById('ButtonNext').name = 'Step5';
                document.getElementById('ButtonPrevious').name = 'Step3';
                // Disable/enable buttons when reach reach start and review steps
                document.getElementById('ButtonNext').disabled = '';
                document.getElementById('SubmitFinal').disabled = 'disabled';
                // Set new step to display and turn off display of current step
                document.getElementById('Step5').style.display = 'none';
                document.getElementById('Step4').style.display = '';
                // Change background color on header to highlight new step
                document.getElementById('HeaderTableStep4').style.backgroundColor = 'Yellow';
                document.getElementById('HeaderTableStep5').style.backgroundColor = 'Silver';
            }
        }

        // This function handles loading the review table innerHTML for the user to review before final submission
        function loadStep5Review()
        {
            // Assign values to appropriate cells in review table
            document.getElementById('ReviewFirstName').innerHTML = document.getElementById('TextFirstName').value;
            document.getElementById('ReviewMiddleName').innerHTML = document.getElementById('TextMiddleName').value;
            document.getElementById('ReviewLastName').innerHTML = document.getElementById('TextLastName').value;
            document.getElementById('ReviewEmail').innerHTML = document.getElementById('TextEmail').value;
            // Indicate Yes or No based on subscription checkbox checked
            if (document.getElementById('CheckboxHtmlGoodies').checked == 1)
            {
                document.getElementById('ReviewHtmlGoodies').innerHTML = 'Yes';
            }
            else
            {
                document.getElementById('ReviewHtmlGoodies').innerHTML = 'No';
            }
            if (document.getElementById('CheckboxJavaScript').checked == 1)
            {
                document.getElementById('ReviewJavaScript').innerHTML = 'Yes';
            }
            else
            {
                document.getElementById('ReviewJavaScript').innerHTML = 'No';
            }
            if (document.getElementById('CheckboxWdvl').checked == 1)
            {
                document.getElementById('ReviewWdvl').innerHTML = 'Yes';
            }
            else
            {
                document.getElementById('ReviewWdvl').innerHTML = 'No';
            }
            // Special case to display password as asterisks
            var iCounter = 1;
            var iCharacterCount = document.getElementById('TextPassword').value.length;
            var passwordMasked = '';
            for (iCounter = 1; iCounter <= iCharacterCount; iCounter++)
            {
                passwordMasked = passwordMasked + '*';
            }
            document.getElementById('ReviewPassword').innerHTML = passwordMasked;
        }
		
