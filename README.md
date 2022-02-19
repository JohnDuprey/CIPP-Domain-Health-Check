# What is this?

The Domain Health Check is a small component of the CyberDrain Improved Partner Portal. This is designed to be run as a public facing Static Web App providing visibilty into common problems with domains.

If you are a Microsoft Partner interested in better management of your tenant environments, check us out [here](https://cipp.app).

# Deployment and Getting Started

If you want to self-host, you will need some knowledge of Static Web Apps.

1. Fork this repository.
2. Fork the [API](https://github.com/johnduprey/CIPP-Domain-Health-Check-API).
3. Set up a new Static Web App in Azure and link to your fork.
4. Set up a new function app and link to the api fork.
5. Link the SWA and function apps.

### Notes

It is highly recommended to proxy this SWA through a service like CloudFlare to prevent abuse.
