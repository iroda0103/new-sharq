<template>
    <div class=" mx-auto rounded-xl">
        <h1 class="text-3xl font-bold text-center page-title">
            Job Application
        </h1>
 
        <form class="space-y-5 page-block">
            <div class="w-full">
                <label class="block mb-1 font-medium text-gray-700 form-group__label">Full Name *</label>
                <input type="text" placeholder="Enter your full name"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control" />
            </div>
            <div class="top flex gap-4 w-100">


                <!-- Email -->
                <div class="w-full">
                    <label class="block mb-1 font-medium text-gray-700 form-group__label">Email *</label>
                    <input type="email" placeholder="you@example.com"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control" />
                </div>

                <!-- Phone -->
                <div class="w-full">
                    <label class="block mb-1 font-medium text-gray-700 form-group__label">Phone *</label>
                    <input type="tel" placeholder="+998 XX XXX XX XX"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control" />
                </div>
                <div class="w-full">
                    <label class="block mb-1 font-medium text-gray-700 form-group__label">Field *</label>
                    <select
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control">
                        <option value="">Select field</option>
                        <option>Employee</option>
                        <option>Teacher</option>
                    </select>
                </div>
            </div>
            <!-- CV Upload -->
            <!-- <div class="w-full">
                <label class="block mb-1 font-medium text-gray-700 form-group__label">Upload CV *</label>
                <input type="file" class="w-full form-control" />
            </div> -->

            <div class="form-group">
                <label class="form-group__label">Upload Your Resume (CV) in PDF:* </label>
                <div class="form-uploader">
                    <label class="form-uploader__area">
                        <i class="fa-solid fa-file-arrow-down"></i>
                        Upload file or drag
                        <input type="file" name="cv_file[]" accept="application/pdf" hidden="" required>
                    </label>
                    <ul class="form-uploader__list" style="display: none;"></ul>
                </div>
            </div>

            <!-- Motivation Letter -->
            <div class="motivation-letter">
                <label class="block mb-1 font-medium text-gray-700 form-group__label">Motivation Letter *</label>
                <textarea rows="5" placeholder="Write your motivation..."
                    class="w-full p-8x` border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 form-control"></textarea>
            </div>

            <!-- Submit -->
            <button type="submit"
                class="w-full py-3 bg-gradient-to-r from-[#0045DE] to-[#1B6AE9] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition form-control">
                Submit Application
            </button>
        </form>
    </div>
</template>
<style>
.form-control {
    height: 44px;
    padding: 0 14px;
    border: 1px solid rgba(223, 228, 237, 1);
    background: rgba(239, 243, 249, 1);
    color: rgba(1, 11, 27, 1);
    font-size: 16px;
    line-height: 140%;
    /* letter-spacing: -0.18px; */
    border-radius: 12px;
    appearance: none;
}
.motivation-letter textarea {
    height: 80px;
}
.form-group__label {
    color: rgba(71, 82, 98, 1);
    font-size: 16px;
    line-height: 140%;
    /* letter-spacing: -0.16px; */
    margin-bottom: 4px;
    display: block;
}

.form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
}

.form-group {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.form-uploader__area {
    border-radius: 10px;
    border: 1px dashed rgba(150, 159, 173, 1);
    background: var(--black-9);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: var(--black-2);
    font-family: "MuseoSansCyrl-500", sans-serif;
    font-size: var(--size-text-18);
    line-height: 140%;
    letter-spacing: -0.18px;
    cursor: pointer;
}

.form-uploader__area i {
    font-size: 24px;
    color: rgba(42, 64, 122, 1);
}
</style>
