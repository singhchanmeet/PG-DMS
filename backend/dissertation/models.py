from django.db import models
from authentication.models import User
import os

def rename_papers(instance, filename):
    ext = filename.split('.')[-1]
    if instance.pk:
        new_name = '{}.{}'.format(instance.article_id, ext)
        # 2) If we change a already uploaded file or image from admin panel
        # then to avoid naming conflict, we first remove the already uploaded file 
        for each_file in os.listdir(os.path.join('media/papers')):
            if (each_file == new_name):
                os.remove(os.path.join('media/papers', new_name))
        return os.path.join('papers', new_name)
    else:
        return filename

class Dissertation(models.Model):

    class MedicalSystem(models.TextChoices):
        # first argument is stored in the database, second is its human-readable form that will be displayed in dropdowns
        AYURVEDA = "AYURVEDA" , 'Ayurveda'
        YOGA_AND_NATUROPATHY = "YOGA_AND_NATUROPATHY" , 'Yoga & Naturopathy'
        UNANI = "UNANI" , 'Unani'
        SIDDHA = "SIDDHA" , 'Siddha'
        HOMOEOPATHY = "HOMOEOPATHY" , 'Homoeopathy'
        SOWARIGPA = "SOWARIGPA" , 'Sowarigpa'

    class Category(models.TextChoices):
        # first argument is stored in the database, second is its human-readable form that will be displayed in dropdowns
        PRECLINICAL_RESEARCH  = "PRECLINICAL_RESEARCH" , 'Preclinical Research'
        CLINICAL_RESEARCH_GRADE_A  = "CLINICAL_RESEARCH_GRADE_A" , 'Clinical Research (Evidence Grade A)'
        CLINICAL_RESEARCH_GRADE_B  = "CLINICAL_RESEARCH_GRADE_B" , 'Clinical Research (Evidence Grade B)'
        CLINICAL_RESEARCH_GRADE_C  = "CLINICAL_RESEARCH_GRADE_C" , 'Clinical Research (Evidence Grade C)'
        FUNDAMENTAL_RESEARCH  = "FUNDAMENTAL_RESEARCH" , 'Fundamental Research'
        DRUG_RESEARCH  = "DRUG_RESEARCH" , 'Drug Research'

    article_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=256)
    author_name = models.CharField(max_length=100)
    author_id = models.ManyToManyField(User)       # this single field can link a dissertation to a student, guide, university
    journal_name = models.CharField(max_length=100)
    institute = models.CharField(max_length=256)
    abstract = models.TextField()
    medical_system = models.CharField(max_length=50, choices=MedicalSystem.choices)
    category = models.CharField(max_length=50, choices=Category.choices)
    disease_related = models.CharField(max_length=256, blank=True)
    keywords = models.CharField(max_length=256, blank=True)
    full_paper = models.FileField(upload_to=rename_papers, blank=True)
    guide_feedback = models.TextField(blank=True)
    university_feedback = models.TextField(blank=True)
    approved_by_guide = models.BooleanField(default=False)
    approved_by_university = models.BooleanField(default=False)
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "dissertations"
        verbose_name_plural = "PG Dissertations"
