(function() {
    'use strict';
    init();

    function init() {
        smoothScroll.init();

        var wow = new WOW({mobile: false});
        wow.init();

        tagsGenerator();
    }

    function tagsGenerator() {
        var skillsPython = ['Python', 'Django', 'Flask', 'FastAPI', 'PyQt', 'Tkinter', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'MySQL', 'PostgreSQL', 'SQLite', 'RESTful APIs', 'Web scraping'],
            skillsHacking = ['Penetration Testing', 'Network Scanning', 'Vulnerability Assessment', 'Exploit Development', 'Metasploit', 'Wireshark', 'Burp Suite', 'Nmap', 'SQL Injection', 'Cross-Site Scripting (XSS)', 'Cross-Site Request Forgery (CSRF)', 'OWASP Top Ten', 'Web Application Security', 'Reverse Engineering', 'Malware Analysis', 'Digital Forensics', 'Cryptography', 'Kali Linux', 'Python Scripting for Hacking', 'Ethical Hacking Methodologies', 'Security Assessments'],
            skillsOthers = ['Linux', 'HTML5', 'CSS3', 'git', 'Heroku'],
            colors = ['btn-info', 'btn-success', 'btn-danger', 'btn-primary', 'btn-warning'],
            i = 0;

        $.each(skillsPython, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-1').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsHacking, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-2').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsOthers, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-3').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
    }
})();
