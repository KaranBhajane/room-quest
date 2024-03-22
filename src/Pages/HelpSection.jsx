import React from "react";
import { Accordion } from "flowbite-react";


export const HelpSection = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="pl-2">
                What is RoomQuest?
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-lg text-blue-700 dark:text-gray-400 p-4">
                  Our platform serves as a marketplace where homeowners can list
                  their rooms for rent, and users can browse and apply for those
                  rooms.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>

          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title className="pl-2">
                How can I list my room for rent on this platform?
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-lg text-blue-700 dark:text-gray-400 p-4">
                  To list your room, you need to sign up as a homeowner, provide
                  details about your property, upload photos, and set rental
                  terms such as price, availability, and any specific
                  requirements.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>

          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title className="pl-2">
                Is there a fee for listing a room on the platform?
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-lg text-blue-700 dark:text-gray-400 p-4">
                  Yes, there might be a nominal fee for homeowners to list their
                  rooms. This fee helps us maintain and improve the platform for
                  a better user experience.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>

          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title className="pl-2">
                How do I apply for a room?
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-lg text-blue-700 dark:text-gray-400 p-4">
                  To apply for a room, you need to create a user account, browse
                  listings, and submit an application for the desired room.
                  Homeowners will review your application and may reach out to
                  you for further discussion.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>

          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title className="pl-2">
                What information should I include in my room application?
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-lg text-blue-700 dark:text-gray-400 p-4">
                  Your application should include basic personal information,
                  such as your name, contact details, occupation, and a brief
                  introduction about yourself. Additionally, you can mention any
                  specific preferences or requirements you have regarding the
                  room.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>

          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title className="pl-2">
                Are there any safety measures in place for users?
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-lg text-blue-700 dark:text-gray-400 p-4">
                  We prioritize user safety and security. We verify homeowners'
                  identities and encourage users to review and provide feedback
                  on their rental experiences. Additionally, we provide tips and
                  guidelines for safe transactions and interactions.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
