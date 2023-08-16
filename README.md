# redux_-_sanity_practice
in this repo i have practice the sanity and redux counter app

Step 1: Create a new Next.js project
npx create-next-app
Step 2: Install Sanity Studio
You start by setting up your content editing environment. It’s called Sanity Studio, and you can configure and customize it with JavaScript. It runs in the browser. To develop locally, we need to run a development server so you can see your changes instantly.

To get started, run this in your command line:
npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset production
This will take you through a setup process by guiding you through the following steps:

Create an account. Select a login provider from the list of options, and confirm with Enter. After creating an account in the browser, come back to the command line window.
It will ask you the following questions.
Would you like to add configuration files for a Sanity project in this Next.js folder? Yes
Would you like an embedded Sanity Studio? Yes
Would you like to use the Next.js app directory for routes? Yes
What route do you want to use for the Studio? /studio
Select project template to use Clean project with no predefined schemas
Would you like to add the project ID and dataset to your .env file? Yes
Wait a bit for the installation process to complete. When you get a Success! message, you're good to move on to the next step!! 🎉
Step 3: Run the Studio locally
npm run dev
This will start the next js project. Once the build is complete, you can head over to http://localhost:3000/studio. It will ask you to add the URL as a CORS origin. Click on Continue to open the Sanity management dashboard. From there, you need to add the CORS origin.

You should now see the Sanity Studio running in your browser!
As you modify and save the code, the server will automatically rebuild the studio and refresh the browser.


**schema**

This step will get you started modeling your content by configuring your first schema for Sanity Studio.
Step 1: Defining your first document type
Let's build a simple content model for holding a collection of pets, real or not. Sanity Studio will automatically build a user interface from the schema where you describe your content models.

A document type is similar to a “collection” if you’re used to NoSQL/document databases or a table if you know relational databases. In the JSON documents that the Studio writes to, it will appear as a _type property. It’s very common to use this property to query for your content; for example *[_type == "pet"].

Let's make a studio that can hold a collection of pets, starting with recording their names.

To make your first document type, do the following:
Head over to the /sanity folder
Create a new file inside of the sanity folder and call it pet.ts
Open pet.ts and add the following code to it.
// sanity/pet.ts
export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        }
    ]
}
Step 2: Import Document Type Definition
In this step we need to import this document type definition into schema.ts and add it to the array of types. Open sanity/schema.ts and do the following:

// sanity/schema.ts
import { type SchemaTypeDefinition } from 'sanity'
import pet from './pet'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet],
}
Now, you can save and run the command npm run dev in your command line if you haven’t started it already. Head over to http://localhost:3000/studio. If everything went as it should, you’ll see Pet appearing to the left. Congrats, this is your first schema type!

You can now click the pencil button 📝 to create a new Pet document

Step 3: Editing Content
As you can see, the form has just one input field that lets you type text. It could be any pet or whatever you can come up with!

When you’re editing, it activates the synchronization indicator in the bottom left corner of your document pane. This is the studio syncing your changes in real time with the hosted Content Lake. In other words, you’re editing content online, even though your studio is running locally. There’s no need to save!

Press the green Publish button to Publish the content
Resources
Create a Sanity project
Create a schema and configure Sanity Studio
