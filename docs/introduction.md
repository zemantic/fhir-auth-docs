---
sidebar_position: 1
---

# Introduction

FHIR Auth is an authentication server for authentication and authorization of FHIR requests. FHIR Auth follows the SMART on FHIR standards and the oAuth authentication flow outlined in the FHIR documentation.

FHIR Auth is compatible with HAPI FHIR and other popular FHIR servers including but not limited to, Microsoft Azure, Google Cloud Platform and IBM FHIR server etc.

With FHIR Auth a FHIR server can grant privilages to clients on creating, reading, updating, deleting, and searching at a FHIR [resource](#what-is-a-fhir-resource) level.

FHIR AUth is server with a REST API strtcture. The graphical user interface for FHIR Auth server is developed in a sepeare repositroy for ease of maintainence.

### What is FHIR?

> The HL7® FHIR® (Fast Healthcare Interoperability Resources) standard defines how healthcare information can be exchanged between different computer systems regardless of how it is stored in those systems. - *https://www.healthit.gov/*

A more technical way to describe FHIR is that it's a systactic standard which defines how healthcare data should be encoded for exchange between systems, and a set of standard REST API endpoints.

By providing the syntactic standard and set of API endpoint, the HL7 FHIR standard helps to achieve interoperability between different healthcare systems.

You can read more about FHIR on the offical HL7 FHIR website - https://www.hl7.org/fhir/overview.html

### What is a FHIR resource?

FHIR resources are basic componets that a system can endocde clinical data for exchanging between systems. Each resource is used to encode a special set of clinical data. For example the patient resource is used to encode data about a patient, while the practiotioner resource is used to encode data about a clinical practitioner.

There are currently around 140+ resources with different maturity levels, and these resources, specially the ones with lower maturiy levels are likely to change or get replaced, and new resources will be added in future FHIR versions.
