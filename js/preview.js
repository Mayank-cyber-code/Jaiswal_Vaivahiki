// =========================================
// preview.js
// =========================================

function renderPreviewContainer() {

    /* ==========================
            Personal Details
    ========================== */

    document.getElementById("previewName").textContent =
        biodata.personal.fullName || "";

    document.getElementById("previewDOB").textContent =
        biodata.personal.dob || "";

    document.getElementById("previewTime").textContent =
        biodata.personal.timeOfBirth || "";

    document.getElementById("previewPlace").textContent =
        biodata.personal.placeOfBirth || "";

    document.getElementById("previewHeight").textContent =
        biodata.personal.height || "";

    document.getElementById("previewComplexion").textContent =
        biodata.personal.complexion || "";

    document.getElementById("previewMaritalStatus").textContent =
        biodata.personal.maritalStatus || "";

    document.getElementById("previewCaste").textContent =
        biodata.personal.caste || "";

    document.getElementById("previewSubCaste").textContent =
        biodata.personal.subCaste || "";

    document.getElementById("previewManglik").textContent =
        biodata.personal.manglik || "";

    document.getElementById("previewMotherTongue").textContent =
        biodata.personal.motherTongue || "";

    document.getElementById("previewDiet").textContent =
        biodata.personal.diet || "";

    document.getElementById("previewHobbies").textContent =
        biodata.personal.hobbies || "";

    document.getElementById("previewOther").textContent =
        biodata.personal.other || "";



    /* ==========================
            Education & Career
    ========================== */

    document.getElementById("previewHighestQualification").textContent =
        biodata.education.highestQualification || "";

    document.getElementById("previewCollege").textContent =
        biodata.education.college || "";

    document.getElementById("previewSchool10").textContent =
        biodata.education.school10 || "";

    document.getElementById("previewSchool12").textContent =
        biodata.education.school12 || "";

    document.getElementById("previewOccupation").textContent =
        biodata.education.occupation || "";

    document.getElementById("previewIncome").textContent =
        biodata.education.annualIncome || "";



    /* ==========================
            Family Details
    ========================== */

    document.getElementById("previewFatherName").textContent =
        biodata.family.fatherName || "";

    document.getElementById("previewFatherOccupation").textContent =
        biodata.family.fatherOccupation || "";

    document.getElementById("previewMotherName").textContent =
        biodata.family.motherName || "";

    document.getElementById("previewMotherOccupation").textContent =
        biodata.family.motherOccupation || "";

    document.getElementById("previewBrothers").textContent =
        biodata.family.brothers || "";

    document.getElementById("previewSisters").textContent =
        biodata.family.sisters || "";



    /* ==========================
            Partner Preference
    ========================== */

    document.getElementById("previewPartnerProfession").textContent =
        biodata.partner.preferredProfession || "";

    document.getElementById("previewPartnerLocation").textContent =
        biodata.partner.preferredLocation || "";

    document.getElementById("previewPartnerOther").textContent =
        biodata.partner.otherExpectations || "";



    /* ==========================
            Contact Details
    ========================== */

    document.getElementById("previewMobile").textContent =
        biodata.contact.mobileNumber || "";

    document.getElementById("previewRelation").textContent =
        biodata.contact.relation || "";



    /* ==========================
            Address
    ========================== */

    document.getElementById("previewCurrentAddress").textContent =
        biodata.contact.currentAddress || "";

    document.getElementById("previewPermanentAddress").textContent =
        biodata.contact.permanentAddress || "";

    document.getElementById("previewDistState").textContent =
        biodata.contact.distState || "";


    /* ==========================
            Declaration
    ========================== */

    document.getElementById("previewSenderName").textContent =
        biodata.declaration.senderName || "";

    document.getElementById("previewSenderMobile").textContent =
        biodata.declaration.senderMobile || "";



    /* ==========================
            Profile Photo
    ========================== */

    document.getElementById("previewPhoto").src =
        biodata.photos.profilePhoto?.preview ||
        "assets/images/defaults/default-profile.png";

    applyPositions();
}






function applyPositions() {

    Object.entries(POSITIONS).forEach(([id, p]) => {

        const e = document.getElementById(id);

        if (!e) return;

        e.style.position = "absolute";

        e.style.left = p.left + "px";

        e.style.top = p.top + "px";

        if (p.width)
            e.style.width = p.width + "px";

        if (p.height)
            e.style.height = p.height + "px";

        if (p.fontSize)
            e.style.fontSize = p.fontSize + "px";

        if (p.fontWeight)
            e.style.fontWeight = p.fontWeight;

        e.style.lineHeight = "1.3";

    });

}









