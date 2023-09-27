import os
import requests

# List of PDF numbers
pdf_numbers = [
    0, 2023, 2024, 2029, 2034, 2036, 2040, 2054, 2071, 2073, 2075, 2078, 2079, 2080, 2082, 2084, 2085, 2087, 2088, 2090, 
    2093, 2094, 2096, 2098, 2121, 2191, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 
    2206, 2207, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2223, 2226, 2231, 2232, 2238, 2240, 2244, 2246, 
    2249, 2255, 2297, 2329, 2375, 2393, 2398, 2421, 2437, 2467, 2470, 2471, 2473, 2474, 2476, 2479, 2486, 2487, 2489, 
    2490, 2493, 2494, 2497, 2500, 2503, 2514, 2521, 2526, 2533, 2536, 2542, 2545, 2546, 2550, 2554, 2555, 2558, 2560, 
    2562, 2563, 2565, 2567, 2568, 2584, 2585, 2586, 2588, 2589, 2592, 2593, 2594, 2596, 2598, 2599, 2601, 2602, 2606, 
    2608, 2610, 2611, 2620, 2624, 2631, 2636, 2639, 2643, 2647, 2651, 2653, 2662, 2679, 2683, 2687, 2689, 2696, 2701, 
    2706, 2708, 2772, 2776, 2779, 2821, 2832, 2840, 2842, 2844, 2852, 2854, 2855, 2857, 2858, 2861, 2862, 2865, 2868, 
    2875, 2876, 2879, 2880, 2882, 2884, 2885, 2889, 2890, 2891, 2892, 2893, 2894, 2896, 2897, 2898, 2902, 2903, 2926, 
    2975, 2986, 3099, 3213, 3235, 3239, 3247, 3255, 3260, 3264, 3270, 3273, 3276, 3279, 3283, 3287, 3289, 3292, 3293, 
    3294, 3295, 3296, 3297, 3298, 3299, 3300, 3301, 3303, 3307, 3309, 3312, 3314, 3315, 3318, 3321, 3323, 3324, 3328, 
    3330, 3331, 3332, 3337, 3339, 3342, 3344, 3354, 3356, 3358, 3361, 3362, 3365, 3366, 3368, 3371, 3376, 3383, 3393, 
    3394, 3395, 3396, 3398, 3399, 3400, 3402, 3403, 3448
]

# Base URL for the PDFs
base_url = "https://ayushportal.nic.in/pdf/"

# Create a directory named "pdfs" if it doesn't exist
pdfs_dir = "pdfs"
if not os.path.exists(pdfs_dir):
    os.makedirs(pdfs_dir)

# Loop through the list of PDF numbers and download each one to the "pdfs" folder
for pdf_number in pdf_numbers:
    # Construct the URL for the current PDF
    pdf_url = f"{base_url}{pdf_number}.pdf"
    
    # Send a GET request to the URL
    response = requests.get(pdf_url)
    
    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Get the content of the response (PDF content)
        pdf_content = response.content
        
        # Specify the local file path within the "pdfs" folder
        local_pdf_path = os.path.join(pdfs_dir, f"{pdf_number}.pdf")
        
        # Write the PDF content to the local file
        with open(local_pdf_path, "wb") as pdf_file:
            pdf_file.write(pdf_content)
        
        print(f"PDF {pdf_number} downloaded and saved as {local_pdf_path}")
    else:
        print(f"Failed to download PDF {pdf_number}. Status code: {response.status_code}")
