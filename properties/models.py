from django.db import models

# Create your models here.
from django.urls import reverse
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)  # Call the real save() method

    def __str__(self):
        return self.name


class SubCategory(models.Model):
    category = models.ForeignKey(Category, related_name='sub_category', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    slug = models.SlugField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(SubCategory, self).save(*args, **kwargs)  # Call the real save() method

    def __str__(self):
        return self.name


class DetailSubCategory(models.Model):
    category = models.ForeignKey(SubCategory, related_name='detail_sub_category', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(max_length=10000, blank=True, null=True)
    message = models.TextField(max_length=10000, blank=True, null=True)
    image = models.ImageField(upload_to='detail_page/', blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(DetailSubCategory, self).save(*args, **kwargs)  # Call the real save() method

    def __str__(self):
        return self.title


class CardsFeatures(models.Model):
    category = models.ForeignKey(SubCategory, related_name='cards_category', on_delete=models.CASCADE)
    icon_card = models.CharField(max_length=30, blank=True, null=True)
    title_card = models.CharField(max_length=60, blank=True, null=True)
    description_card = models.TextField(max_length=10000, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title_card)
        super(CardsFeatures, self).save(*args, **kwargs)  # Call the real save() method

    def __str__(self):
        return self.title_card


class CardsProgramUnits(models.Model):
    category = models.ForeignKey(SubCategory, related_name='cards_units_category', on_delete=models.CASCADE)
    icon_program = models.CharField(max_length=30, blank=True, null=True)
    title_program = models.CharField(max_length=100, blank=True, null=True)
    description_program = models.TextField(max_length=10000, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title_program)
        super(CardsProgramUnits, self).save(*args, **kwargs)  # Call the real save() method

    def __str__(self):
        return self.title_program


class CardDoxHome(models.Model):
    category = models.ForeignKey(SubCategory, related_name='card_dox_home', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(max_length=10000, blank=True, null=True)
    image = models.ImageField(upload_to='home_page/', blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(CardDoxHome, self).save(*args, **kwargs)  # Call the real save() method

    def __str__(self):
        return self.title


class CardEliteHome(models.Model):
    category = models.ForeignKey(SubCategory, related_name='card_elite_home', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(max_length=10000, blank=True, null=True)
    image = models.ImageField(upload_to='home_page/', blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(CardEliteHome, self).save(*args, **kwargs)  # Call the real save() method

    def __str__(self):
        return self.title