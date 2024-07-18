from django.contrib import admin

# Register your models here.
from .models import (
    Pages,
)

class PagesInline(admin.StackedInline):
    model = Pages
    extra = 1
    
@admin.register(Pages)
class PagesAdmin(admin.ModelAdmin):
    # form = PagesForm
    list_display = ('name', 'h1')
    
    def get_pages(self, obj):
        return obj.pages.title
    get_pages.short_description = "Pages"
    