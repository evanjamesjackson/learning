﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Events
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        /*  This method handles the event of button1 being clicked */
        private void button1_Click(object sender, EventArgs e)
        {
            /*  "sender" indicates which object sent the event */
            MessageBox.Show("Sender object: " + sender.ToString());
            /*  "e" is an object of the EventArgs class and indicates what event has been raised */
            MessageBox.Show("EventArgs: " + e.ToString());
        }

        /*  This method handles the MouseDown event being performed on Form1 */
        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            /* Several methods and properties are available to a MouseEventArgs object */
            MessageBox.Show("Mouse button pressed: " + e.Button.ToString()); //will display "Left", "Right", or "Middle" depending on mouse button clicked
            MessageBox.Show("Number of clicks: " + e.Clicks.ToString()); //displays number of clicks
        }

        /*  This method handles the KeyDown event being performed on textBox1 */
        private void textBox1_KeyDown(object sender, KeyEventArgs e)
        {
            /* Several methods and properties are available to a KeyEventArgs object */
            MessageBox.Show("Key pressed: " + e.KeyData);
        }

        /*  This method handles the Leave event being performed on textBox1 (sent when user attempts to Tab away) */
        private void textBox1_Leave(object sender, EventArgs e)
        {
            if (textBox1.Text == "")
            {
                MessageBox.Show("This text box can't be left empty");
                textBox1.Focus(); //bring user back to the text box
            }
        }
    }
}
